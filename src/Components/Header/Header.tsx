import "../Header/Header.css";
import BannerCarousel from "../BannerCarousel/BannerCarousel";

export const Header = () => {
  return (
    <header className="header-container">
      <BannerCarousel />
    </header>
  );
};

export default Header;
