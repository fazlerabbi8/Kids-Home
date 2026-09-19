import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

const Error404 = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen items-center space-y-3">
            <MdErrorOutline size={100} className="text-primary"/>
            <h3 className="text-4xl font-bold">Page Not Found</h3>
            <Link className="btn" href={"/"}>Go To Home</Link>
        </div>
    );
};

export default Error404;