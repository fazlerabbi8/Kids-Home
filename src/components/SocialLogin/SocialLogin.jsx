"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const router = useRouter();
    const handleGoogleLogin = async() => {
        const result = await signIn('google', {callbackUrl: "/"})
        if(result.ok){
            toast.success("Login successfully.")
            router.push('/');
        }else{
            toast.error("something went wrong!")
        }
    }
  return (
    <div>
      <button onClick={handleGoogleLogin}
        className="btn btn-outline w-full gap-2"
        type="button"
      >
        <FcGoogle size={20} />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
