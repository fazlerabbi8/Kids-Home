import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({product}) => {
    const isLogin = true;
    const router = useRouter();
    const path = usePathname();

    const add2Cart = () =>{
        if(!isLogin){
            alert(product._id)
        }
        else{
            router.push(`/login?callbackUrl=${path}`);
        }
    }
    return (
        <div>
            <button onClick={add2Cart} className="btn btn-primary w-full">
                <FaShoppingCart />
                Add to Cart
              </button>
        </div>
    );
};

export default CartButton;