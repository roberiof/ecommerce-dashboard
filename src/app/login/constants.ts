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

export const formVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export const inputVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }
};
