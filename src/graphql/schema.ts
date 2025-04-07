import { gql } from "graphql-tag";
import { inboxList, messages } from "./data";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
const MESSAGE_ADDED = "MESSAGE_ADDED";

export const typeDefs = gql`
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

export const resolvers = {
  Query: {
    inboxList: () => inboxList,
    inboxItem: (_: any, { id }: { id: string }) =>
      inboxList.find((item) => item.id === id),
    messages: (_: any, { chatId }: { chatId: string }) =>
      messages[chatId] || [],
  },
  Mutation: {
    sendMessage: (
      _: any,
      { chatId, sender, text }: { chatId: string; sender: string; text: string }
    ) => {
      const newMessage = {
        id: `${Date.now()}`,
        chatId,
        sender,
        text,
        time: new Date().toLocaleTimeString(),
        date: new Date().toISOString().split("T")[0],
      };
      if (!messages[chatId]) messages[chatId] = [];
      messages[chatId].push(newMessage);

      pubsub.publish(MESSAGE_ADDED, {
        messageAdded: newMessage,
      });

      return newMessage;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: (_: any, { chatId }: { chatId: string }) =>
        pubsub.asyncIterator(MESSAGE_ADDED),
      resolve: (payload: any) => payload.messageAdded,
    },
  },
};
