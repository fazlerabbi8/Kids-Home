
"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm({ onSubmit, onGoogleSignIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
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
              className=""
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password */}
          <label className="input  w-full input-bordered flex items-center gap-2">
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

          <div className="text-right -mt-2">
            <a href="/forgot-password" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
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
          Don&apos;t have an account?{" "}
          <a href="/register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}