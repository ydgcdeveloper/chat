import { v4 as uuidv4 } from 'uuid';
import ChatMessage from '../interfaces/chatMessage.interface';

const exampleMessages: ChatMessage[] = [
  {
    id: uuidv4(),
    text: 'Hello, how are you?',
    sender: 'user',
    senderId: 1,
    timestamp: Date.now(),
    status: 'sent',
    reactions: { '👍': 3, '❤️': 1 },
  },
  {
    id: uuidv4(),
    text: 'I am doing well, thank you!',
    sender: 'bot',
    senderId: 4,
    timestamp: Date.now() + 1000,
    status: 'delivered',
  },
  {
    id: uuidv4(),
    text: 'What are your plans for the weekend?',
    sender: 'user',
    senderId: 1,
    timestamp: Date.now() + 2000,
    status: 'read',
    replyTo: {
      id: uuidv4(),
      text: 'Not much, just relaxing.',
      sender: 'bot',
    },
  },
  {
    id: uuidv4(),
    text: 'Sounds good! 😊',
    sender: 'user',
    senderId: 1,
    timestamp: Date.now() + 3000,
    status: 'sent',
  },
  {
    id: uuidv4(),
    text: 'Do you have any recommendations for movies?',
    sender: 'user',
    senderId: 4,
    timestamp: Date.now() + 4000,
    status: 'sent',
  },
  {
    id: uuidv4(),
    text: 'Sure, I can suggest a few. What genre do you prefer?',
    sender: 'bot',
    senderId: 2,
    timestamp: Date.now() + 5000,
    status: 'delivered',
  },
  {
    id: uuidv4(),
    text: 'I like action and comedy.',
    sender: 'user',
    senderId: 4,
    timestamp: Date.now() + 6000,
    status: 'read',
    reactions: { '👌': 2 },
  },
  {
    id: uuidv4(),
    text: 'Great choices! How about "Inception" for action and "The Grand Budapest Hotel" for comedy?',
    sender: 'bot',
    senderId: 3,
    timestamp: Date.now() + 7000,
    status: 'sent',
  },
  {
    id: uuidv4(),
    text: 'Sounds like a plan. Thanks!',
    sender: 'user',
    senderId: 3,
    timestamp: Date.now() + 8000,
    status: 'delivered',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 2,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 4,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 2,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 2,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 4,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'Sure, I can suggest a few. What genre do you prefer?',
    sender: 'bot',
    senderId: 2,
    timestamp: Date.now() + 9000,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'You\'re welcome! Enjoy your weekend.',
    sender: 'bot',
    senderId: 1,
    timestamp: Date.now() + 90046546545640,
    status: 'read',
  },
  {
    id: uuidv4(),
    text: 'Do you have any recommendations for movies?',
    sender: 'bot',
    senderId: 4,
    timestamp: Date.now() + 90000000,
    status: 'read',
  },
];

export default exampleMessages;