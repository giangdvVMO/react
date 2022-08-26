import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';
import { Button, Cascader, Checkbox, Form, Image, Input, Select, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import '../styles/input.css';

const SignIn = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        type: ''
    });

    const ref = useRef();
    const refButtonSubmit = useRef();
    //Autocomplete list type: 
    const options = [
        { value: 'Quản trị', label: 'Quản trị' },
        { value: 'Doanh nghiệp', label: 'Doanh nghiệp' },
        { value: 'Sinh viên', label: 'Sinh viên' },
    ];

    function handleChangeUserName(e) {
        setUser((preUser) => { return { ...preUser, username: e.target.value } });
    }

    function handleChangePassword(e) {
        setUser((preUser) => { return { ...preUser, password: e.target.value } });
    }

    function onFinish(e) {

    }
    function onFinishFailed(e) {

    }

    function onGenderChange(e) {

    }

    function handleKeyUp(e) {
        if (e.keyCode == 13) {
            console.log('enter');
            refButtonSubmit.current.focus();
            refButtonSubmit.current.click();
        }
    }

    function handleSubmit(e) {
        console.log("submit");
        ref.current.submit();
    }
    return (
        <div className='grid-container'>
            <div className='img-side' ></div>
            <div className='flex-container'>
                <Form
                    ref={ref}
                    onKeyUp={handleKeyUp}
                    className='form'
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <Typography type="secondary" className='title'>ĐĂNG NHẬP</Typography>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Hãy nhập username!' }]}
                        tooltip={{ title: 'Username là unique', icon: <InfoCircleOutlined /> }}
                    >
                        <Input
                            className='input-login'
                            placeholder="Nhập username"
                            autoFocus={true}
                            prefix={<UserOutlined className='input-icon' />}
                            suffix={
                                <Tooltip title="Username là unique">
                                    <InfoCircleOutlined className='input-icon opacity-less'
                                    />
                                </Tooltip>
                            }
                            value={user.username}
                            onChange={handleChangeUserName}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Hãy nhập password!' }]}
                        tooltip={{ title: 'Password bao gồm 8 kí tự trở lên, có cả chữ và số! ', icon: <InfoCircleOutlined /> }}
                    >
                        <Input.Password
                            className='input-login'
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            prefix={<KeyOutlined className='input-icon' />}
                            onChange={handleChangePassword}
                        />
                    </Form.Item>
                    <Form.Item name="type" label="Đối tượng" rules={[{ required: true }]} tooltip={{ title: 'Chỉ được chọn 1', icon: <InfoCircleOutlined /> }}>
                        <Select
                            className='select'
                            placeholder="Bạn là ai?"
                            allowClear
                            options={options}
                            dropdownClassName='dropdown'
                        >
                        </Select>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type='submit' ref={refButtonSubmit} name='button-submit' className='button submit' onSubmit={handleSubmit} onClick={handleSubmit} onKeyUp={handleKeyUp}>Submit</Button>
                        <Button type='reset' className='button reset'>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
}

export default SignIn;