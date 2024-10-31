"use client";

import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { z } from "zod";
import AuthCarousel from "@/components/auth-carousel";
import { GoogleIcon } from "../../../assets/icons/google-icon";
import AuthInput from "@/components/auth-input";

const registerSchema = z
  .object({
    email: z.string().email("Geçerli bir e-posta adresi girin."),
    password: z
      .string()
      .min(8, "Şifre en az 8 karakter olmalıdır.")
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      ),
    confirmPassword: z.string().min(8, "Şifreyi onaylayın."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor.",
    path: ["confirmPassword"],
  });

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (error) {
      alert("Hata: " + error.message);
    } else {
      alert("Kayıt başarılı! Lütfen e-postanızı doğrulayın.");
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className=" items-center justify-center h-screen w-2/5 bg-primary hidden md:flex">
        {/* <AuthCarousel /> */}
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-3/5">
        <p className="text-4xl font-bold">Sign up for an account</p>
        <p className="text-text text-lg">Send, spend and save smarter</p>
        <button className="border flex flex-row justify-center items-center rounded-lg bg-button px-8 py-2.5 gap-3 font-semibold my-5">
          <GoogleIcon />
          Sign Up with Google
        </button>
        <div className="flex items-center gap-4 my-4 mb-6 text-text text-sm">
          <div className="h-px w-36 bg-text" /> or with e-mail
          <div className="h-px w-36 bg-text" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-7 w-1/2 mx-auto"
          >
            <AuthInput
              type="email"
              placeholder="ilaydabulut@gmail.com"
              register={register("email")}
              error={errors.email?.message}
            />

            <AuthInput
              type="password"
              placeholder="Password"
              register={register("password")}
              error={errors.password?.message}
            />

            <AuthInput
              type="password"
              placeholder="Confirm Password"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />

            <p className="text-text text-sm">
              By creating an account, you agreeing to our Privacy Policy, and
              Electronics Communication Policy.
            </p>

            <button
              type="submit"
              className="w-full p-2 bg-primary text-white font-bold rounded-lg h-[3.75rem]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
