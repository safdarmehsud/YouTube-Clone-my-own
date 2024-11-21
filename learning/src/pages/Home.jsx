import Navbar from "../components/navbar";
import Swiper from "../components/swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import Carts from "../components/carts";

const Home = () => {
  const url = "https://yt-api.p.rapidapi.com/home";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "x-rapidapi-key":
            "229c7fc249mshc00ff8ca96573ecp1ba454jsn8f3475a91f43",
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const filteredData = data.filter((_, index) => ![1, 2, 4, 5].includes(index));

  return (
    <>
      <Navbar />
      <Swiper />
      <div className="absolute top-[9%] left-[3.5%] w-[95%]  float-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredData?.map((dat, index) => (
          <Carts key={index} dat={dat} />
        ))}
      </div>
    </>
  );
};

export default Home;
