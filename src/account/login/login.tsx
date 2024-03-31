import { Button, Checkbox, Form, FormProps, Input, Space, notification } from "antd";
import './login.css'
import Header_Account_Component from "../shared_Component/header_account_component";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    window.location.href = "/";
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginComponent = () => {
    return (
        <div className="Container">
            <Header_Account_Component />
            <div style={{
                height: "80px"
            }}></div>

            <div className="Content">
                <div className="loginContent">
                    <div className="leftContent">
                        a
                    </div>

                    <div className="formLogin">
                        <div className="titleLogin">
                            <p className="title"> Đăng nhập</p>
                        </div>
                        <div className="form">

                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{
                                    maxWidth: 600,
                                    marginRight: "30px",
                                    marginLeft: "30px",
                                    width: "500px",
                                    borderRadius: "0",

                                }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    // label="Username"
                                    style={{

                                    }}
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    // label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button
                                        className="custom-button ant-btn"
                                        htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default LoginComponent;