import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({product}) => {
    return (
        <div>
            <button className="btn btn-primary w-full">
                <FaShoppingCart />
                Add to Cart
              </button>
        </div>
    );
};

export default CartButton;