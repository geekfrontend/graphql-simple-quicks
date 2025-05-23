export const inboxList = [
  {
    id: "1",
    subject: "Status Update",
    preview: "Meeting starts at 10 AM.",
    sender: "John Doe",
    date: "2025-04-05 07:55",
    isGroup: false,
    isUnread: true,
  },
  {
    id: "2",
    subject: "FastVisa Support",
    preview: "Sure thing, Claren.",
    sender: "Ali Khan",
    date: "2025-04-05 07:50",
    isGroup: true,
    isUnread: false,
  },
  {
    id: "3",
    subject: "I-589 - AMARKHIL, Obaidullah",
    preview: "Please review the latest document.",
    sender: "Sara Lee",
    date: "2025-04-05 07:45",
    isGroup: true,
    isUnread: true,
  },
  {
    id: "4",
    subject: "FastVisa Support",
    preview: "Hey there! Welcome to your inbox.",
    sender: "Mary Hilda",
    date: "2025-04-05 07:40",
    isGroup: false,
    isUnread: true,
  },
  {
    id: "5",
    subject: "Status Update",
    preview: "Don't forget the deadline.",
    sender: "Liam Patel",
    date: "2025-04-05 07:35",
    isGroup: true,
    isUnread: true,
  },
  {
    id: "6",
    subject: "I-589 - AMARKHIL, Obaidullah",
    preview: "Let\u2019s catch up soon!",
    sender: "Mary Hilda",
    date: "2025-04-05 07:30",
    isGroup: true,
    isUnread: true,
  },
  {
    id: "7",
    subject: "Document Review",
    preview: "The file has been sent.",
    sender: "Obaidullah",
    date: "2025-04-05 07:25",
    isGroup: true,
    isUnread: false,
  },
  {
    id: "8",
    subject: "Profile Update",
    preview: "Your profile is incomplete.",
    sender: "Sara Lee",
    date: "2025-04-05 07:20",
    isGroup: true,
    isUnread: true,
  },
  {
    id: "9",
    subject: "I-589 - AMARKHIL, Obaidullah",
    preview: "Let\u2019s catch up soon!",
    sender: "Sara Lee",
    date: "2025-04-05 07:15",
    isGroup: false,
    isUnread: true,
  },
  {
    id: "10",
    subject: "Document Review",
    preview: "Your case has been updated.",
    sender: "Sara Lee",
    date: "2025-04-05 07:10",
    isGroup: false,
    isUnread: true,
  },
];

export const messages: Record<
  string,
  Array<{
    id: string;
    chatId: string;
    sender: string;
    text: string;
    time: string;
    date: string;
  }>
> = {
  "1": [
    {
      id: "1",
      chatId: "1",
      sender: "You",
      text: "Hey, how’s the project going?",
      time: "07:58",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "1",
      sender: "Alex",
      text: "Almost done, just polishing a few things!",
      time: "08:00",
      date: "2025-04-05",
    },
    {
      id: "3",
      chatId: "1",
      sender: "Claren",
      text: "Let me know if you need anything else.",
      time: "08:01",
      date: "2025-04-05",
    },
  ],
  "2": [
    {
      id: "1",
      chatId: "2",
      sender: "You",
      text: "Morning! Did the report get sent?",
      time: "07:50",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "2",
      sender: "Jamie",
      text: "Yes, just sent it five minutes ago.",
      time: "07:51",
      date: "2025-04-05",
    },
    {
      id: "4",
      chatId: "2",
      sender: "Claren",
      text: "I'll follow up by noon.",
      time: "08:03",
      date: "2025-04-05",
    },
  ],
  "3": [
    {
      id: "1",
      chatId: "3",
      sender: "You",
      text: "Let’s sync up at 2 PM.",
      time: "07:40",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "3",
      sender: "Rina",
      text: "Sounds good, I’ll be ready.",
      time: "07:41",
      date: "2025-04-05",
    },
    {
      id: "4",
      chatId: "3",
      sender: "Claren",
      text: "Do you need clarification on the document?",
      time: "08:05",
      date: "2025-04-05",
    },
  ],
  "4": [
    {
      id: "1",
      chatId: "4",
      sender: "You",
      text: "Let’s meet at the café later?",
      time: "07:35",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "4",
      sender: "Mira",
      text: "Sure, see you at 10!",
      time: "07:36",
      date: "2025-04-05",
    },
    {
      id: "3",
      chatId: "4",
      sender: "Claren",
      text: "I'll be there 10 minutes early.",
      time: "08:06",
      date: "2025-04-05",
    },
  ],
  "5": [
    {
      id: "1",
      chatId: "5",
      sender: "You",
      text: "Deploy is scheduled at 11 AM.",
      time: "07:30",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "5",
      sender: "Budi",
      text: "Noted, I’ll monitor.",
      time: "07:31",
      date: "2025-04-05",
    },
    {
      id: "4",
      chatId: "5",
      sender: "Claren",
      text: "Let’s make sure the update goes live today.",
      time: "08:08",
      date: "2025-04-05",
    },
  ],
  "6": [
    {
      id: "1",
      chatId: "6",
      sender: "You",
      text: "Can someone help with the bug in the form?",
      time: "07:25",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "6",
      sender: "Claren",
      text: "We should loop in the support team.",
      time: "08:09",
      date: "2025-04-05",
    },
  ],
  "7": [
    {
      id: "1",
      chatId: "7",
      sender: "You",
      text: "Welcome to the team!",
      time: "07:20",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "7",
      sender: "Claren",
      text: "Appreciate the warm welcome!",
      time: "08:10",
      date: "2025-04-05",
    },
  ],
  "8": [
    {
      id: "1",
      chatId: "8",
      sender: "You",
      text: "Any updates from the finance department?",
      time: "07:15",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "8",
      sender: "Claren",
      text: "Thanks for the update!",
      time: "08:11",
      date: "2025-04-05",
    },
  ],
  "9": [
    {
      id: "1",
      chatId: "9",
      sender: "You",
      text: "Just finished the client presentation.",
      time: "07:10",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "9",
      sender: "Dina",
      text: "Great job!",
      time: "07:11",
      date: "2025-04-05",
    },
    {
      id: "5",
      chatId: "9",
      sender: "Claren",
      text: "I’ve updated the client dashboard.",
      time: "08:13",
      date: "2025-04-05",
    },
  ],
  "10": [
    {
      id: "1",
      chatId: "10",
      sender: "You",
      text: "Status update on the action items?",
      time: "07:00",
      date: "2025-04-05",
    },
    {
      id: "2",
      chatId: "10",
      sender: "Claren",
      text: "All action items are done on my side.",
      time: "08:15",
      date: "2025-04-05",
    },
  ],
};
