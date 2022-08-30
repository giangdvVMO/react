import { Avatar, Badge, Button, Dropdown, Image, List, Menu, message } from "antd";
import { BellOutlined } from "@ant-design/icons"
import VirtualList from 'rc-virtual-list';

import "../styles/notification.css"
import { useEffect, useState } from "react";
const Notification = () => {
    const count = 3;
    const notifications = [
        {
            id: 1,
            title: "title1",
            content: "content1",
            time: "1/2/2022"
        },
        {
            id: 2,
            title: "title2",
            content: "content2",
            time: "2/2/2022"
        },
        {
            id: 3,
            title: "title3",
            content: "content3",
            time: "3/2/2022"
        },
    ]

    const fakeDataUrl =
        'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
    const ContainerHeight = 400;
    const [data, setData] = useState([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            appendData();
        }
    };

    return (<>
        <div className="notification-container">
            <div className="bell-container">
                <Badge count={count} overflowCount={99}>
                    <Avatar shape="circle" className="bell-avatar"><BellOutlined /></Avatar>
                </Badge>
            </div>

            <div className="box-container-hover">
                <div className="sub-notification-container">
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description={item.email}
                                    />
                                    <button></button>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                    <Button style={{ width: '100%' }}>Xem chi tiết</Button>
                </div>
            </div>
        </div>
    </>
    )
};

export default Notification;