"use client";

import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm({ onSubmit, onGoogleSignIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await postUser(formData);
    if(result.acknowledged){
        router.push("/");
        toast.success("Register successfully completed.")
    }
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl mx-auto mb-10">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center mb-4">Create Account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaUser className="text-base-content/50" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="grow"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaEnvelope className="text-base-content/50" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="grow"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password */}
          <label className="input input-bordered flex w-full items-center gap-2">
            <FaLock className="text-base-content/50" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="grow"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
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

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={onGoogleSignIn}
          className="btn btn-outline w-full gap-2"
          type="button"
        >
          <FcGoogle size={20} />
          Google
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}