import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href={'/'} className="flex justify-center items-center gap-2">
                <Image alt= "logo" src={'/assets/logo.png'} width={60} height={60} />
                <h1 className="text-2xl font-bold"><span className="text-primary">Kids</span> Home</h1>
            </Link>
        </div>
    );
};

export default Logo;