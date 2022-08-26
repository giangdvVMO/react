import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
    return (
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
        </Badge>
    )

}

export default Cart;