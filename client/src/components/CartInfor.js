import { useContext } from "react"
import { UserContext } from "./UserProvider"

const Cart = () => {
    const { user, changeUser } = useContext(UserContext)
    return (
        <div>
            {console.log('cart', user)}
            Hello ${user.name} cart
        </div>
    )
}

export default Cart;