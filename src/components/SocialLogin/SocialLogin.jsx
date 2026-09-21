"use client"

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
      const params = useSearchParams();
      const callBackUrl = params.get("callbackUrl") || "/";
    const router = useRouter();
    const handleGoogleLogin = async() => {
        const result = await signIn('google', {callbackUrl: callBackUrl})
        if(result.ok){
            toast.success("Login successfully.")
            router.push(callBackUrl);
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
