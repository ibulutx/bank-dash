"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { z } from "zod";
import AuthInput from "@/components/auth-input";
import { GoogleIcon } from "../../../assets/icons/google-icon";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır."),
});
type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (error) {
      alert("Hata: " + error.message);
    } else {
      alert("Giriş Başarılı");
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center justify-center h-screen w-3/5">
        <p className="text-4xl font-bold">Sign In to Ember</p>
        <p className="text-text text-lg">Send, spend and save smarter</p>
        <button className="border flex flex-row justify-center items-center rounded-lg bg-button px-8 py-2.5 gap-3 font-semibold my-5">
          <GoogleIcon />
          Sign In with Google
        </button>
        <div className="flex items-center gap-4 my-4 mb-6 text-text text-sm">
          <div className="h-px w-36 bg-text" /> or with e-mail
          <div className="h-px w-36 bg-text" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-1/2 mx-auto"
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
            <button
              type="submit"
              className="w-full p-2 bg-primary text-white font-bold rounded-lg h-[3.75rem]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <p>Don’t have a account? Sign Up</p>
          </form>
        </div>
      </div>
      <div className=" items-center justify-center h-screen w-2/5 bg-primary hidden md:flex">
        {/* <AuthCarousel /> */}
      </div>
    </div>
  );
};

export default LoginPage;
