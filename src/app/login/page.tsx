"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import InputField from "@/components/molecules/InputField/InputField";
import Button from "@/components/ui/button";
import { executeLogin } from "@/store/services/authentication";
import { errorToast, successToast } from "@/utils/toast";
import SignInFormSchema, { SignInForm } from "@/validations/login/login";

import {
  formVariants,
  inputVariants,
  logoVariants,
  saveUserInfo,
  saveUserToken
} from "./constants";

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid }
  } = useForm<SignInForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(SignInFormSchema)
  });

  const handleForm = async (data: SignInForm) => {
    const { error, accessToken } = await executeLogin(data);

    if (error || !accessToken) {
      console.log({ error, accessToken });
      errorToast("Login falhou! Tente novamente.");
      return;
    }

    saveUserInfo(data);
    saveUserToken(accessToken);
    successToast("Login realizado com sucesso!");
    router.push("/home");
  };

  return (
    <main className="relative w-screen h-screen flex items-center justify-center">
      <Image
        src={"/background.svg"}
        fill
        className="object-cover opacity-90"
        alt="Image background"
      />
      <motion.form
        onSubmit={handleSubmit(handleForm)}
        className="shadow-xl flex-col w-[900px] h-full flex items-center gap-12 justify-center bg-white z-10 p-8"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 text-center">
          <motion.div variants={logoVariants}>
            <Image src={"/logo.svg"} width={263} height={226} alt="Logo" />
          </motion.div>
          <h3 className="text-base-black text-[24px] font-nunito-sans font-semibold">
            Entrar na plataforma
          </h3>
        </div>

        <div className="w-[400px] space-y-4">
          <motion.div variants={inputVariants}>
            <InputField
              register={register}
              label="E-mail"
              placeholder="Digite seu email"
              name="email"
              formErrors={errors}
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <InputField
              register={register}
              label="Senha"
              placeholder="Digite sua senha"
              name="password"
              type="password"
              formErrors={errors}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            variant={"secondary"}
            loading={isSubmitting}
            disabled={!isValid}
          >
            Entrar
          </Button>
        </motion.div>
      </motion.form>
    </main>
  );
};

export default Login;
