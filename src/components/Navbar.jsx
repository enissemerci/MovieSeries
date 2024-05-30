import React from "react";
import { Layout, Button } from "antd";
const { Header } = Layout;
import "../style/Navbar.css";

export const Navbar = () => {
  return (
    //Navbar oluşturdum ve tasarımını Navbar.css dosyası ile gerçekleştirdim
    <Layout>
      <Header className="header">
        <div className="header-logo">BULUTMD</div>
        <div className="header-auth">
          <Button className="header-auth-btn">Giriş</Button>
          <Button className="header-auth-btn" type="primary" danger>
            Deneme Başlat
          </Button>
        </div>
      </Header>
      <Header className="header-content">
        <p>Popüler Başlıklar</p>
      </Header>
    </Layout>
  );
};
