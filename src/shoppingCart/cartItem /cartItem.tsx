import { Button } from "@mui/material";
import { CartItemType } from "../../App";
import { Wrapper } from "../cartItem /CartItem.styles";
type Props = {
    item: CartItemType;

}
const CartItem: React.FC<Props> = ({item}) => (
    <Wrapper >
        <div >

        </div>
    </Wrapper>
)
export default CartItem