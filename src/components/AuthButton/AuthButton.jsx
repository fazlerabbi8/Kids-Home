"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <button className="btn btn-disabled">Loading...</button>;
  }

  return (
    <div>
      {status === "authenticated" ? (
        <button
          className="btn btn-primary"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="btn btn-primary btn-outline"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
