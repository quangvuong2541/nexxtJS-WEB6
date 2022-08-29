import CartItem from "../cartItem /cartItem";
import { Wrapper } from "../cart/Cart.styles";
import {CartItemType} from "../../App"

type Props ={
    cartItem : CartItemType[];
    addToCart: (clickedItem : CartItemType) => void;
    removeFromCart :(id:number) => void;
}

const Cart :React.FC <Props> = ({cartItem, addToCart, removeFromCart}) => {
    const calculateTotal = (item : CartItemType[])=> 
    item.reduce((sum:number , item) => sum +item.amount * item.price,0)
    // console.log(cartItem);
    
    return (
        <Wrapper >
            <h2 >Your shopping Cart</h2>
            {cartItem.length === 0 ? <p > No items in Cart </p> : null}
            {cartItem.map((item, key) =>( 
                    <CartItem
                            key = {key}
                            item ={item}
                            addToCart = {addToCart}
                            removeFromCart = {removeFromCart}                
                    />
            ))}
            <h2 >
                total : ${calculateTotal(cartItem).toFixed(2)}
            </h2>
        </Wrapper>
    )
}
export default Cart