import React from "react";
import { Card, Space, Typography,Row, Col  } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

function Cards({ name, email, phone, website}) {
  const image = `https://avatars.dicebear.com/api/avataaars/:${name}.svg`;

  return (
    < ><Col span={6}>
      <Card
        
        size="small"
        cover={
          <img
            alt="Not found"
            src={image}
            style={{ backgroundColor: "#f0f0f0" }}
          />
          
        }
        style={{ width: 300 }}
      >
        <Typography.Title level={4} style={{ margin: 1 }}>
          {name}
        </Typography.Title>

        <div style={{ width: "100%" }}>
          <Row >
            <Col span={24}>
              <Text type="primary">
                <Space>
                  <MailOutlined />
                </Space>
                {` ${email}`}
              </Text>
            </Col>

            <Col span={24}>
              <Text type="primary">
                <Space>
                  <PhoneOutlined />
                </Space>
                {` ${phone}`}
              </Text>
            </Col>

            <Col span={24}>
              <Text type="primary">
                <Space>
                  <GlobalOutlined />
                </Space>
                {` ${website}`}
              </Text>
            </Col>
          </Row>
        
        </div>

        <div
          style={{ backgroundColor: "#f0f0f0", width: "100%", padding: "2px" }}
        >
          <Row justify="space-evenly">

            <Col span={4}>
              <Space>
                <HeartOutlined style={{ color: "red" }} />{" "}
              </Space>
            </Col>

            <Col span={4}>
              <Space>
                <EditOutlined style={{ color: "#7F8487" }} />{" "}
              </Space>
            </Col>

            <Col span={4}>
              <Space>
                <DeleteFilled style={{ color: "#7F8487" }} />{" "}
              </Space>
            </Col>
          </Row>
        </div>
      </Card>
      </Col>
    </>
  );
}

export default Cards;
