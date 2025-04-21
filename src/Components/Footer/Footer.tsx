// components/Footer.tsx
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import NewsletterBanner from "./NewsletterBanner";

const departments = [
  "Hardware",
  "Celular e Smartphone",
  "Periféricos",
  "Teclado e Mouse",
  "Computadores",
  "Placa de Vídeo",
  "Monitores",
  "Consoles e Games",
  "Áudio",
  "TV",
  "Eletrodomésticos",
  "Eletroportáteis",
  "Smart Home",
  "Ferramentas",
  "Ar e Ventilação",
  "Segurança",
];

export const Footer: React.FC = () => {
  const half = Math.ceil(departments.length / 2);
  const firstHalf = departments.slice(0, half);
  const secondHalf = departments.slice(half);

  const createSlug = (name: string) =>
    encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <NewsletterBanner />
      </div>

      <div className="footer-columns">
        <div className="footer-column departments">
          <h3 className="column-title">Departamentos</h3>
          <div className="department-grid">
            <ul>
              {firstHalf.map((item) => (
                <li key={item}>
                  <a href={`/departamentos/${createSlug(item)}`}>{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {secondHalf.map((item) => (
                <li key={item}>
                  <a href={`/departamentos/${createSlug(item)}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Atendimento</h3>
          <p>Seg-Sex: 08h às 20h</p>
          <p>Sáb: 09h às 15h</p>
          <p>contato@decaystore.com.br</p>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Redes Sociais</h3>
          <div className="social-icons">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </div>
          <p className="social-credit">Desenvolvido por Luiz Everson</p>
        </div>
      </div>

      <div className="footer-copy">
        <p>
          © {new Date().getFullYear()} DecayStore. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
