import { createContext } from 'react';

const UserContext = createContext({
  loggedInUser: 'Default User',
  setUserName: () => {}, // Provide a default empty function for setUserName
});

export default UserContext;



