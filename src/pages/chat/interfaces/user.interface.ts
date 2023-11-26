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
    dateOfBirth?: string;
    joinedDate: string;
  }
  
  export default User;