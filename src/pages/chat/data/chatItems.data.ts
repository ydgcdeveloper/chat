import exampleMessages from "./exampleMessages.data";
import exampleUsers from "./exampleUsers.data";

const chatItems = [
    {
      id: 1,
      lastMessage: "Lorem ipsum dolor sit amet.",
      unreadMessages: 4,
      lastDate: new Date().toDateString(),
      messages: exampleMessages.filter(message => message.senderId === exampleUsers[3].id || message.senderId === exampleUsers[0].id),
      participants: [exampleUsers[3], exampleUsers[0]],
    },
    {
      id: 2,
      lastMessage: "Lorem ipsum dolor sit amet.",
      unreadMessages: 10,
      lastDate: new Date("05/23/1996").toDateString(),
      messages: exampleMessages.filter(message => message.senderId === exampleUsers[3].id || message.senderId === exampleUsers[1].id),
      participants: [exampleUsers[3], exampleUsers[1]],
    },
    {
      id: 3,
      lastMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est.",
      unreadMessages: 2,
      lastDate: new Date("10/10/2002").toDateString(),
      messages: exampleMessages.filter(message => message.senderId === exampleUsers[3].id || message.senderId === exampleUsers[2].id),
      participants: [exampleUsers[3], exampleUsers[2]],
    },
  ];

  export default chatItems;