import React, { useState } from "react";
import { Modal, Form, Input } from "antd";



const PopUp = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const [isModalVisible, setIsModalVisible] = useState(true);
    const onFinish = (values) => {
        console.log(values);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>

            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form {...layout} name="control-hooks" onFinish={onFinish} >
                    <Form.Item name="Name" label="Name"
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="Email" label="Email"
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="Phone" label="Phone"
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="Website" label="Website"
                        rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default PopUp;
