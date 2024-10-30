"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { z } from "zod";
import AuthCarousel from "@/components/auth-carousel";

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
    <div className="flex items-center justify-center h-screen bg-red-100">
      {/* <AuthCarousel /> */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500">{errors.confirmPassword?.message}</p>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
