import React from "react";
import { Layout } from "antd";
import { TwitterOutlined, FacebookFilled } from "@ant-design/icons";
const { Footer } = Layout;
import "../style/FooterComponent.css";
export const FooterComponent = () => {
  return (
    <div>
      <Footer className="footer">
        <div className="footer-desc">
          {/*kullanıcı sözleşmesi ve gizlilik sözleimesi sayflarım olmadığı için tüm linkleri HomePage e geri döndürdüm */}
          <a className="footer-desc-link" href="/">
            Anasayfa
          </a>
          <a className="footer-desc-link" href="/">
            Kullanıcı Sözleşmesi
          </a>
          <a className="footer-desc-link" href="/">
            Gizlilik Sözleşmesi
          </a>
        </div>
        <br />
        <div className="footer-icon">
          <FacebookFilled style={{ fontSize: "24px", color: "white" }} />
          <TwitterOutlined
            style={{ fontSize: "24px", color: "white", marginLeft: "10px" }}
          />
        </div>
      </Footer>
    </div>
  );
};
