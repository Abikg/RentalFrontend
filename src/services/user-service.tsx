import { myAxios } from "./helper";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface LoginProps {
  email: string;
  password: string;
}

export const signUp = async (user: Props) => {
  const response = await myAxios.post("/api/auth/signup/user", user);
  return response;
};

export const logIn = async (userLoginInfo: LoginProps) => {
  const response = await myAxios.post("/api/auth/login", userLoginInfo);
  return response;
};
