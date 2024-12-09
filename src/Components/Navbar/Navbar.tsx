"use client"
import Link from "next/link";
import "../Navbar/Navbar.css"
import {FaSearch, FaBars ,FaShoppingCart} from "react-icons/fa"
import { useState } from "react";
import { useNavbar } from "@/Context/NavbarContext";
import { useCart } from "@/Context/CartContext";

export const Navbar = () =>{
  const [showMenu, setShowMenu] = useState(false);
  const { setIsFalsePathTrue } = useNavbar();
  const {cartItems} = useCart()

  const handleToggleTrue = () => {
    setIsFalsePathTrue(true);
  };

  const HandleMenuMob = (): void => setShowMenu(!showMenu);

  return(
    <div className="navBar">
     <div className="container">
     <Link href="/"><h1 className="logo">Decayl<span>Store</span></h1></Link>

        <nav className= {`${showMenu && "menu-mob"}` }>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <div className="navIcons">
          <div className="input-search">
            <input type="search" placeholder="Procurar algo" />
            <FaSearch />
          </div>
          <button className="cartButton" onClick={handleToggleTrue}>
            <FaShoppingCart />
            <div className="productCount">{cartItems.length}</div>
          </button>
          <button className="menu-mob"
          onClick={HandleMenuMob}
          >
            <FaBars />
          </button>
        </div>
     </div>
    </div>
  )
}

export default Navbar;