import React from "react";
import { FiMail } from "react-icons/fi";
import "./NewsletterBanner.css";

export const NewsletterBanner: React.FC = () => {
  return (
    <section className="newsletter-banner">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>
            <FiMail className="mail-icon" /> DecayStore News
          </h2>
          <p>Receba ofertas exclusivas e novidades direto no seu e-mail.</p>
        </div>
        <form className="newsletter-form">
          <input type="text" placeholder="Seu nome" aria-label="Seu nome" />
          <input
            type="email"
            placeholder="Seu e‑mail"
            aria-label="Seu e‑mail"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
