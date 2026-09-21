"use client";

import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl") || "/";
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password, callbackUrl:callBackUrl,
      redirect: false,
    });

    console.log(result);

    if (result?.ok) {
      toast.success("Login successful.");
      router.push("/");
      router.refresh();
    } else {
      toast.error("Incorrect email or password.");
    }
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl mx-auto mb-10">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <label className="input w-full input-bordered flex items-center gap-2">
            <FaEnvelope className="text-base-content/50" />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password */}
          <label className="input w-full input-bordered flex items-center gap-2">
            <FaLock className="text-base-content/50" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="grow"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-base-content/50"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>

          {/* Forgot Password */}
          <div className="text-right -mt-2">
            <a href="/forgot-password" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          {/* Login */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <SocialLogin />

        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
