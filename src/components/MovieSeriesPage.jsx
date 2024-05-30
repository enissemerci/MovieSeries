import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Card } from "antd";
import "../style/MovieSeries.css";
const { Meta } = Card;

const MovieSeriesPage = ({ category }) => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  //axios ile datayı çektim
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/sample.json");
        setEntries(response.data.entries);
        filterEntries(response.data.entries, category);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  // HomePage den aldığımız cetegory propsu ile iki kere kod yazmak yerine kodumuzu category propsuna göre değiştirdim
  const filterEntries = (entries, category) => {
    const filtered = entries.filter((entry) => {
      if (category === "movies") {
        return entry.programType === "movie";
      } else if (category === "series") {
        return entry.programType === "series";
      }
      return true; // Tüm girişleri göster
    });
    setFilteredEntries(filtered.slice(0, 18)); // Herhangi bir arama yapmadığımız takdirde 18 tane (ilk 18) dizi/film gösteriyor
  };

  // search işlemi
  const handleSearch = (value) => {
    setSearchTerm(value);
    //eğer 3 tane veya fazlasında harf girildiyse aramaya başlayacak
    if (value.length >= 3) {
      const filtered = entries.filter((entry) =>
        //büyük küçük harf farketmeksizin sonuç gösteriyo olucak
        entry.title.toLowerCase().includes(value.toLowerCase())
      );
      const filteredByCategory = filtered.filter((entry) => {
        if (category === "movies") {
          return entry.programType === "movie";
        } else if (category === "series") {
          return entry.programType === "series";
        }
        return true; // Tüm girişleri göster
      });
      setFilteredEntries(filteredByCategory);
    } else {
      filterEntries(entries, category);
    }
  };

  // Sıralama işlemi burada puana göre sırala olmalı demiştiniz ama datasetimde puan yok o yüzden onu atladım
  const handleSort = (value) => {
    setSortBy(value);
    let sortedEntries = [...filteredEntries];
    switch (value) {
      case "yeniye":
        sortedEntries.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "eskiye":
        sortedEntries.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case "rastgele":
        sortedEntries = shuffledArray(sortedEntries);
        break;
      default:
        break;
    }
    setFilteredEntries(sortedEntries);
  };

  // random sayı üreterek sıralama işlemini gerçekleştirmek
  const shuffledArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="shows">
      <div className="search">
        <Input
          placeholder="Film/Dizi Ara"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchTerm}
        />
        <select id="ant-dropdown" onChange={(e) => handleSort(e.target.value)}>
          <option value="">Sırala</option>
          <option value="yeniye">Yeniye göre sırala</option>
          <option value="eskiye">Eskiye göre sırala</option>
          <option value="rastgele">Rastgele sırala</option>
        </select>
      </div>
      <div className="movies">
        {/*eğer filtrelediğim dizinin uzunluğu 0 dan büyükse içindeki tüm elemanları ant design kartının içine döndürdüm */}
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, index) => (
            <Card
              key={index}
              style={{ width: 230, margin: "10px" }}
              cover={
                <img alt={entry.title} src={entry.images["Poster Art"].url} />
              }
            >
              <Meta title={entry.title} />
            </Card>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            Gösterilecek film veya dizi bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSeriesPage;
