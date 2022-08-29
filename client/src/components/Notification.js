import { Avatar, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons"

const Notification = () => {
    const count = 100;
    return (
        <Badge count={count} overflowCount={99}>
            <Avatar shape="circle"><BellOutlined /></Avatar>
        </Badge>
    )
}

export default Notification;