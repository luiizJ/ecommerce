// app/produtos/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/Context/CartContext';
import { Product } from '@/Types/ProductsTypes';
import './ProductPage.css'; // Importe seu arquivo CSS
import { calcJuros } from '@/Utils/calcJuros';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const { addItemToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch('/assets/db.json')
        .then((res) => res.json())
        .then((data) => {
          const parsedId = parseInt(Array.isArray(id) ? id[0] : id, 10);
          const found = data.products.find((p: Product) => p.id === parsedId);
          setProduct(found || null);
          const others = data.products.filter((p: Product) => p.id !== parsedId);
          setRelated(others.slice(0, 5));
        })
        .catch((err) => console.error('Erro ao carregar produto:', err));
    }
  }, [id]);

  if (!product) {
    return <div className="product-not-found">Produto não encontrado.</div>;
  }

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> &gt; 
        <Link href="/produtos">Produtos</Link> &gt; 
        <span>{product.name}</span>
      </nav>
      <div className="product-main">
        <div className="gallery">
          <div className="main-image">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          <div className="thumbnails">
            {[product.image].map((src, idx) => (
              <div key={idx} className="thumb-item">
                <Image
                  src={src}
                  alt={`${product.name}-${idx}`}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <div className="price-section">
            <span className="price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            <span className="discount">
              À vista no Pix com <span style={{ fontWeight: 'bold' }}>10% de Desconto</span></span>
              <span className="installments"> Ou em até 10x de <span  style={{ fontWeight: 'bold' }}> R$ {calcJuros ({ price: product.price })} </span> sem juros no cartão
              </span>
        </div>

          <div className="actions">
            <button
              onClick={() => addItemToCart(product)}
              className="btn-add-cart"
            >
              <FaShoppingCart /> Adicionar ao carrinho
            </button>
            <button className="btn-buy">Comprar Agora</button>
          </div>

          <div className="cep-section">
            <label htmlFor="cep-input">Consultar frete e prazo de entrega</label>
            <div className="cep-input-group">
              <input
                id="cep-input"
                type="text"
                placeholder="00000-000"
              />
              <button className="btn-cep">OK</button>
            </div>
            <p className="cep-note">Os prazos de entrega começam a contar a partir da confirmação de pagamento</p>
          </div>
        </div>
      </div>

      <details className="accordion">
        <summary>Descrição do Produto</summary>
        <p>{product.name} é um produto de alta qualidade, desenvolvido para atender aos usuários mais exigentes...</p>
      </details>

      <section className="related-products">
        <h2>Produtos Relacionados</h2>
        <div className="related-carousel">
          {related.map((rel) => (
            <Link key={rel.id} href={`/products/${rel.id}`} className="related-card">
              <Image src={rel.image} alt={rel.name} width={300} height={300} />
              <div className="related-info">
                <h3>{rel.name}</h3>
                <p>R$ {rel.price.toFixed(2).replace('.', ',')}</p>
                <div className="price-section">
                  <span className="discount">
                   À vista no Pix com <span style={{ fontWeight: 'bold' }}>10% de Desconto</span></span>
                  <span className="installments"> Ou em até 10x de <span  style={{ fontWeight: 'bold' }}> R$ {calcJuros ({ price: rel.price })} </span> sem juros no cartão
                  </span>
                </div>
                
              </div>
              </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
