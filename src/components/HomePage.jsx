import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const { Meta } = Card;

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/${category}`);
  };
  // Card componentinden aldığım propsu MovieSeriesPage e aktardım böylece hem dizi hem de film için 2 farklı sayfa yazmak yerine aldığım propsla sayfanın dizi mi yoksa film olacağına karar verdim
  return (
    <div className="cards">
      <Card
        className="card"
        hoverable
        onClick={() => handleClick("movies")}
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="Film"
            //burada ve dizi kartımda istediğim fotoğrafları koydum
            src="https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
          />
        }
      >
        <Meta title="Film" />
      </Card>
      <Card
        className="card"
        hoverable
        onClick={() => handleClick("series")}
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="Dizi"
            src="https://upload.wikimedia.org/wikipedia/tr/1/1c/Better_Call_Saul_season_1.jpg"
          />
        }
      >
        <Meta title="Dizi" />
      </Card>
    </div>
  );
};

export { HomePage };
