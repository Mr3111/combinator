import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import "./App.scss";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout className="layout">
      <Header>
        <img src="/Aerothon-logo.png" className="logo" alt="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[{
              key: "1",
              label: "Home",
            },
            {
              key: "2",
              label: "About",
            }]}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Create</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Combinator ©2022 Created by Team Unity</Footer>
    </Layout>
  );
}
