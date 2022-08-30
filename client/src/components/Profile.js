import { Avatar, Image, Typography } from "antd";
import "../styles/profile.css"

const Profile = () => {

    return (
        <>
            <div className="profile-box-container">
                <div className="profile-avatar-container" >
                </div>
                <Avatar
                    shape="circle"
                    className="avartar"
                    src={<Image src="https://joeschmoe.io/api/v1/random" />} />
                <div className="introduction">
                    <Typography className="profile-name">Profile</Typography>
                    <p className="intro-text">Xin chào mọi người, đây là profile của tui.</p>
                </div>
            </div>
        </>
    )

}

export default Profile;