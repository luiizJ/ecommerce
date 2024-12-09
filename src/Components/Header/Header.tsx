import Link from "next/link";
import {FaChevronRight} from "react-icons/fa"
import image1 from "../../../public/assets/images/header-image.png"
import Image from "next/image";
import "../Header/Header.css"

export const Header = () =>{
  return(
   <header>
    <div className="container">
          <div className="left-slide">
            <h2>Aqui tem promoçao todo dia, O dia todo</h2>
            <p>Confira já os nossos principais produtos em promoção</p>
            <Link className="verMais" href="/produtos">
              <span>Ver Agora</span>
              <FaChevronRight />
            </Link>
          </div>
      <div className="right-slide">
      <Image height={220} width={450} src={image1} alt="Logo" />;
      </div>
    </div>
   </header>
  )
}

export default Header;