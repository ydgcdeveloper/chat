interface ChatMessage {
    id: string;
    text: string;
    sender: string; // 'user' | 'bot' | 'system'
    senderId?: number;
    timestamp: number;
    status: 'sent' | 'delivered' | 'read';
    attachment?: {
      type: 'image' | 'video' | 'file';
      url: string;
    };
    reactions?: {
      [emoji: string]: number; // Emoji and count of reactions
    };
    forwardedFrom?: string; // Sender ID if the message is forwarded
    replyTo?: {
      id: string;
      text: string;
      sender: string;
    };
    // Add more fields as needed
  }
  
  export default ChatMessage;
  