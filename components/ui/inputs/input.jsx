"use client"
import { useState } from "react";
import { Eye,EyeOff } from 'lucide-react';
export default function CustomInput({
  type = "text",
  placeholder,
  label,required,
  id,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full mb-4 grid gap-1.5 relative">
      {label && (
        <label 
          htmlFor={id}
          className="block text-[#414651] text-sm font-medium"
        >
                     {required? <span className="text-[#8658D7]">*</span>:null}

          {label}
        </label>
      )}
        <input
        
          id={id}
          name={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full py-2.5 px-3.5 border border-[#D5D7DA] rounded-lg outline-[#9270E2]"
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=" absolute top-10 left-3.5"          >
            {showPassword ? <EyeOff color="#A4A7AE" size={16}/> : <Eye color="#A4A7AE" size={16} />}
          </button> 
        )}
       
    </div>
  );
}
