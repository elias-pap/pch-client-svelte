// import { getUser, isUserInDb, registerUser } from './minioUtil';

const getInitialAuthState = () => {
  return localStorage.getItem('user') ? true : false;
};

const handleLogin = async (credentials) => {
  // Stub this method for now
  // TODO implement JWT handling
  loginUser(user.username);
  return true;

  // const user = await getUser(credentials.username);
  // if (
  //   user &&
  //   user.username === credentials.username &&
  //   user.password === credentials.password
  // ) {
  //   loginUser(user.username);
  //   return true;
  // } else {
  //   return false;
  // }
};

const loginUser = (username) => {
  localStorage.setItem('user', username);
};

const handleSignup = async (credentials) => {
  // Stub this method for now
  // TODO implement JWT handling
  return await handleLogin(credentials);

  // const username = credentials.username;
  // const userInDb = await isUserInDb(username);
  // if (!userInDb) {
  //   await registerUser(credentials);
  //   loginUser(username);
  //   return true;
  // } else {
  //   return false;
  // }
};

const handleLogout = () => {
  logoutUser();
  return false;
};

const logoutUser = (username) => {
  localStorage.removeItem('user');
};

export { getInitialAuthState, handleLogin, handleSignup };
