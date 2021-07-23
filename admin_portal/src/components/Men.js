import "./Men.css";
import { Layout, Tabs, Menu, Button, Row, Col } from "antd";
import { Bars } from "./Navbar/NavbarElements";
const { Header, Content } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

const Men = () => {
  return (
    <Layout>
      <div>
        <Content>
          <Row>
            <Col span={2}>
              <div>
                <h1>Popared</h1>
              </div>
            </Col>
            <Col span={20}></Col>
            <Col span={2}></Col>
            <div>
              <Button>Logout</Button>
            </div>
          </Row>
        </Content>
        <Menu
          style={{
            textAlign: "center",
            position: "fixed",
            zIndex: 1000,
            top: "50px",
            left: "0px",
            width: "100%",
            background: "#F4F4F4",
            elevation: 10,
            boxShadow: "2px 2px 3px #888888",
          }}
          model="horizontal"
        >
          <Menu.Item key="Projects" title="Projects">
            Projects
          </Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
        </Menu>
      </div>
    </Layout>
  );
};

export default Men;
