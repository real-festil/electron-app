import { Form, Input, Checkbox, Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';

const Auth = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.replace(`/articles`);
  };

  return (
    <MainLayout title="Authorization">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        onFinishFailed={onSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: `Please input your username!` }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: `Please input your password!` }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export default Auth;
