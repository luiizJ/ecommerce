import "./globals.css";
import Header from "@/Components/Header/Header";
import Produtos from "@/Components/Produtos/Produtos";
import { ExclusiveSection } from "@/Components/ExclusivoS/ExclusiveSection";


export default function Home() {
  
  return (
  <>
      <Header />
      <Produtos/>
      <ExclusiveSection />
  </>
  );
}
