"use server";

import api from "./api-service";

interface RegisterUserProps {
  username: string;
  email: string;
  password: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

export async function registerUserService(userData: RegisterUserProps) {
  try {
    const response = await api.post("auth/login", {
      email: userData.email,
      password: userData.password,
    });

    return response.data;
  } catch (error) {
    console.error("Registration Service Error:", error);
    throw error;
  }
}

export async function loginUserService(userData: LoginUserProps) {
  try {
    const response = await api.post("auth/login", {
      email: userData.identifier,
      password: userData.password,
    });

    return response.data;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}
