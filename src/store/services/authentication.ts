import axios from "axios";

import { SignInForm } from "@/validations/login/login";

import { baseURL } from "./axios";

const executeLogin = async (data: SignInForm) => {
  try {
    const response = await axios.post<{
      "access-token": string;
    }>(`${baseURL}/login`, {
      body: {
        email: data.email,
        password: data.password
      }
    });
    return { error: null, accessToken: response.data["access-token"] };
  } catch (error) {
    console.error("Login failed", error);

    if (error instanceof Error) {
      return { error: error.message, accessToken: null };
    } else {
      return { error: "Unknown error", accessToken: null };
    }
  }
};

export { executeLogin };
