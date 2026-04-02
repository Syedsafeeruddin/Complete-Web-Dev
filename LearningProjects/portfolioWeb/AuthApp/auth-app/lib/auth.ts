import { User, CurrentUser } from '@/types';
import { getAllUsers, saveUsers, setCurrentUser } from './storage';

export const registerUser = (
  email: string,
  password: string
): { success: boolean; message: string } => {
  const users = getAllUsers();

  if (users.some((u) => u.email === email)) {
    return { success: false, message: 'This email is already registered' };
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    password, // ⚠️ In production: hash this with bcrypt
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  return { success: true, message: 'User registered successfully' };
};

export const loginUser = (
  email: string,
  password: string
): { success: boolean; message: string } => {
  const users = getAllUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }

  const currentUser: CurrentUser = {
    id: user.id,
    email: user.email,
    loginTime: new Date().toISOString(),
  };

  setCurrentUser(currentUser);
  return { success: true, message: 'Login successful' };
};

export const logoutUser = (): void => {
  import('./storage').then(({ clearCurrentUser }) => clearCurrentUser());
};
