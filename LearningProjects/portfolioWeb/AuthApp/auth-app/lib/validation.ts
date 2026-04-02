export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

export const validateSignUp = (email: string, password: string, confirmPassword: string) => {
  const errors: Record<string, string> = {};

  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email';

  if (!password) errors.password = 'Password is required';
  else if (!isValidPassword(password)) errors.password = 'Password must be at least 6 characters';

  if (!confirmPassword) errors.confirmPassword = 'Please confirm your password';
  else if (!passwordsMatch(password, confirmPassword)) errors.confirmPassword = 'Passwords do not match';

  return { isValid: Object.keys(errors).length === 0, errors };
};

export const validateSignIn = (email: string, password: string) => {
  const errors: Record<string, string> = {};

  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email';

  if (!password) errors.password = 'Password is required';

  return { isValid: Object.keys(errors).length === 0, errors };
};