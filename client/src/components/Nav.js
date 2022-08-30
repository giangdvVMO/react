import Notification from "./Notification"
import "../styles/nav.css"
import Account from "./Account";

const Nav = () => {
    return (
        <div className="nav">
            <Notification />
            <Account />
        </div>
    )
}

export default Nav;