import axios from "axios";

import { cookieSet } from "@/store/services/cookies";
import { storageSet } from "@/store/services/storage";
import { SignInForm } from "@/validations/login/login";

const encryptUserPassword = async (password: string) => {
  const response = await axios.post(
    "/api/encrypt",
    { data: password },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const { response: encryptedPassword } = response.data;

  return encryptedPassword;
};

export const saveUserInfo = async (data: SignInForm) => {
  const passwordHash = await encryptUserPassword(data.password);

  storageSet(
    "user",
    JSON.stringify({
      email: data.email,
      passwordHash
    })
  );
};

export const saveUserToken = (accessToken: string) => {
  const cookieOptions = {
    httpOnly: true, // Impede o acesso via JavaScript
    secure: process.env.NODE_ENV === "production", // Somente em HTTPS
    sameSite: "Strict", // Protege contra CSRF
    maxAge: 60 * 60 * 24 // 1 dia de expiração
  };

  cookieSet("accessToken", accessToken, cookieOptions);
};
