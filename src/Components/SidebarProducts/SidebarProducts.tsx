import Image from "next/image";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { SidebarProductsProps } from "@/Types/ProductsTypes";
import { useCart } from "@/Context/CartContext";

export const SidebarProducts = ({ id, price, name, image, quantity = 1 }: SidebarProductsProps) => {
  const { updateQuantity, cartItems, setCartItems } = useCart(); // Pegando a função do contexto
  const initialAmount = quantity || 1; // Se quantity não for definido, inicializa como 1
  const [amount, setAmount] = useState(initialAmount);
  const [priceSum, setPriceSum] = useState(price * initialAmount); // Calcula a soma inicial corretamente

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setAmount(value);
      setPriceSum(value * price);
      updateQuantity(id, value); // Atualizando a quantidade no contexto
    }
  };

  const removeProductToCart = (id:number) =>{
    const newListProductss = cartItems.filter(product => product.id !== id);
    setCartItems(newListProductss)
  }

  return (
    <div className="sideBarProducts">
      <div className="leftSide">
        <button className="removeProduct" onClick={()=> removeProductToCart(id)}>
          <MdClose />
        </button>
        <div className="details">
          <h3>{name}</h3>
          <p>R$ {price.toFixed(2)}</p>
          <input type="number" min={1} value={amount} onChange={handleAmountChange} />
          {priceSum && price && (
            <p className="sumPrice">
              <span>Soma: </span> R$ {priceSum.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <div className="rightSide">
        <Image src={image} width={75} height={76} alt={name} />
      </div>
    </div>
  );
};

export default SidebarProducts;
