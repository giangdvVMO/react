import { BackTop } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons'

const BackTopX = () => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    }
    return (

        <div style={{ height: '300vh' }}>
            <div><p>abc</p></div>
            <BackTop visibilityHeight={1000} duration={1000}>
                <div style={style}><ArrowUpOutlined /> </div>
            </BackTop>
        </div>

    )
}

export default BackTopX;