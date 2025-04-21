"use client";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../Produtos/Produtos.css";
import { useCart } from "@/Context/CartContext";
import type { Product } from "@/Types/ProductsTypes";
import { formatPrice } from "@/Utils/calcJuros";

export const Produtos = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    fetch("/assets/db.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  const addProductToCart = (id: number) => {
    const productToAdd = products.find((product) => product.id === id);
    if (!productToAdd) return; // Verifica se o produto existe
    if (cartItems.some((item) => item.id === productToAdd.id)) return; // Evita duplicados
    setCartItems([...cartItems, productToAdd]); // Adiciona o produto ao carrinho
  };

  return (
    <div className="container-produtos">
      <div className="title-section">
        <h3>Principais Produtos</h3>
        <div className="border"></div>
      </div>

      {/* Lista de produtos */}
      <div className="containerDeProdutosList">
        <div className="listaDeProdutos">
          {/* Renderizando os produtos */}
          {products.map((product) => (
            <div key={product.id} className="produto-card">
              <Link
                href={`/products/${product.id}`}
                className="produto-card-link"
              >
                {/* Imagem do produto */}
                <Image
                  width={250}
                  height={250}
                  src={product.image}
                  alt={product.name}
                  className="produto-imagem"
                />
                {/* Nome do produto */}
                <h4 className="produto-nome">{product.name}</h4>
              </Link>
              {/* Avaliação do produto */}
              <p className="produto-rating">
                {Array.from({ length: product.rating }, (_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </p>

              {/* Preço do produto */}
              <p className="produto-preco">
                <span style={{ color: "#ff6600" }}>R$ </span>
                {formatPrice(product.price)}
              </p>

              {/* Botões */}
              <div className="buttons">
                <Link href="/products/123/checkout" className="btnIcon">
                  <span>Comprar Agora</span>
                </Link>

                <button
                  className="btnAdd btnIcon"
                  onClick={() => addProductToCart(product.id)}
                >
                  <span>Adicionar ao carrinho</span>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
