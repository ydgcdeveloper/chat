interface User {
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    profileImage?: string;
    status?: 'online' | 'offline' | 'away';
    bio?: string;
    phoneNumber?: string;
    location?: string;
    dateOfBirth?: string; // Consider using a proper date type
    joinedDate: string; // Consider using a proper date type
    // Add more user-related fields as needed
  }
  
  export default User;