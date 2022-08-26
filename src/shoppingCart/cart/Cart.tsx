import CartItem from "../cartItem /cartItem";
import { Wrapper } from "../cart/Cart.styles";
import {CartItemType} from "../../App"

type Props ={
    cartItem : CartItemType[];
    addToCart: (clickedItem : CartItemType) => void;
    removeFromCart :(id:number) => void;
}

const Cart :React.FC <Props> = ({cartItem}) => {
    const calculateTotal = (item : CartItemType[])=> 
    item.reduce((sum:number , item) => sum +item.amount * item.price,0)
    return (
        <Wrapper >
            <h2 >Your shopping Cart</h2>
        </Wrapper>
    )
}
export default Cart