import { useState } from "react";
import Logo from "../images/Logo.jpg";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Carts = ({ title, description, toggleFavCount, incrementCartClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      toggleFavCount(!prevIsFavorite); // Increment or decrement based on current state
      return !prevIsFavorite;
    });
  };

  return (
    <div className="main-container flex justify-center content-center">
      <div className="cart-container group w-64 h-[410px] bg-black rounded-t-xl rounded-b-sm cursor-pointer relative overflow-hidden">
        <img
          src={Logo}
          alt=""
          className="h-72 w-64 rounded-t-xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <h2 className="text-white text-xl cursor-pointer ml-2">{title}</h2>
        <p className="text-gray-300 text-xs ml-2">{description}</p>

        <div className="flex justify-end gap-2 absolute top-1 left-44">
          {/* Favorite Icon */}
          <i
            className={`text-black text-2xl leading-none ${
              isFavorite ? "text-red-600" : ""
            } hover:text-red-600 hover:text-3xl transition-all h-8 w-8 bg-white rounded-full flex justify-center items-center`}
            onClick={handleFavoriteClick}
          >
            <CiHeart />
          </i>

          {/* Cart Icon */}
          <i
            className="text-black text-2xl hover:text-blue-500 hover:text-3xl transition-all h-8 w-8 bg-white rounded-full flex justify-center items-center"
            onClick={incrementCartClick}
          >
            <CiShoppingCart />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Carts;
