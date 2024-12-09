import Image from "next/image"
import image2 from "../../../public/assets/images/gaming-msi-header.png"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"
import "../ExclusivoS/ExclusiveSection.css"

export const ExclusiveSection = () =>{
  return(
    <div className="exclusiveSection">
      <div className="sectionContainer">
          <div className="produtoEx">
              <div className="left-slide">
                <div className="productCenter">
                <h2>NotebookGamer - GT62VR 6RE</h2>
                <p>o GT62VR 6RE Dominator PRO é uma opção interessante para quem quer uma melhor experiência em games. 
                  A máquina possui uma GPU Nvidia Geforce GTX 1070 que, segundo a fabricante, consegue rodar sem travamentos os jogos da atualidade e também os de realidade virtual.</p>
                </div>
                <Link className="verMais" href="/produtos">
                <span>Compre já</span>
                <FaChevronRight />
                </Link>
              </div>
          </div>
          <div className="right-slide">
            <Image src={image2} width={450} height={350} alt="notebookGamer"/>
          </div>
      </div>
    </div>
  )
}