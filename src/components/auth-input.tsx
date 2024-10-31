import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full p-2 border rounded-lg drop-shadow-sm h-14"
      />
      {error && <p className="text-red-500 absolute text-sm">{error}</p>}
    </div>
  );
};

export default AuthInput;
