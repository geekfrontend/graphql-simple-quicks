"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
const data_1 = require("./data");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubsub = new graphql_subscriptions_1.PubSub();
const MESSAGE_ADDED = "MESSAGE_ADDED";
exports.typeDefs = (0, graphql_tag_1.gql) `
  type InboxItem {
    id: ID!
    subject: String!
    preview: String!
    sender: String!
    date: String!
    isGroup: Boolean
    isUnread: Boolean
  }

  type Message {
    id: ID!
    chatId: ID!
    sender: String!
    text: String!
    time: String!
    date: String!
  }

  type Query {
    inboxList: [InboxItem!]!
    inboxItem(id: ID!): InboxItem
    messages(chatId: ID!): [Message!]!
  }

  type Mutation {
    sendMessage(chatId: ID!, sender: String!, text: String!): Message!
  }

  type Subscription {
    messageAdded(chatId: ID!): Message
  }
`;
exports.resolvers = {
    Query: {
        inboxList: () => data_1.inboxList,
        inboxItem: (_, { id }) => data_1.inboxList.find((item) => item.id === id),
        messages: (_, { chatId }) => data_1.messages[chatId] || [],
    },
    Mutation: {
        sendMessage: (_, { chatId, sender, text }) => {
            const newMessage = {
                id: `${Date.now()}`,
                chatId,
                sender,
                text,
                time: new Date().toLocaleTimeString(),
                date: new Date().toISOString().split("T")[0],
            };
            if (!data_1.messages[chatId])
                data_1.messages[chatId] = [];
            data_1.messages[chatId].push(newMessage);
            pubsub.publish(MESSAGE_ADDED, {
                messageAdded: newMessage,
            });
            return newMessage;
        },
    },
    Subscription: {
        messageAdded: {
            subscribe: (_, { chatId }) => pubsub.asyncIterator(MESSAGE_ADDED),
            resolve: (payload) => payload.messageAdded,
        },
    },
};
//# sourceMappingURL=schema.js.map