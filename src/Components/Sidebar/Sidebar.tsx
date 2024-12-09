'use client'

import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import "../Sidebar/Sidebar.css";
import SidebarProducts from "../SidebarProducts/SidebarProducts";
import { useNavbar } from "@/Context/NavbarContext";
import { useCart } from "@/Context/CartContext";

export const Sidebar = () => {
  const { cartItems } = useCart();
  const { isFalsePathTrue, setIsFalsePathTrue } = useNavbar();

  const HandleFalse = () => {
    setIsFalsePathTrue(false);
  };

  // Calculando o total, considerando a quantidade de cada item
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  return (
    <aside className={`sidebar ${isFalsePathTrue && "show"}`}>
      <div className="top">
        
        <h3>Seu Carrinho</h3>
        <button onClick={HandleFalse}>
          <MdClose />
        </button>
      </div>

      <div className="sideBarlist">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <SidebarProducts key={item.id} {...item} />
          ))
        ) : (
          <strong>Seu Carrinho Está Vazio</strong>
        )}
      </div>

      <div className="containerProducts">
        <p>Total: <span>R$ {total.toFixed(2)}</span></p>
      </div>

      {cartItems.length > 0 && (
        <Link className="btnIcon" href="/produtos/checkout">
          <span>Comprar</span>
          <FaChevronRight />
        </Link>
      )}
    </aside>
  );
};

export default Sidebar;
