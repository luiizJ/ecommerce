import Link from "next/link"
import "../Footer/Footer.css"

export const Footer = () =>{
   return(
    <footer>
        <div className="page-content content">
          <div className="logo-footer">
            <h1 className="logo">
            Decayl<span>Store</span>
            </h1>
              <p>texto totalmente emocionante e inspirador para revolucionar a sua mente</p>
          </div>
          <hr/>
           <div className="links">
            <h3>Links Uteis</h3>
              <ul>
                <li><Link href={"/"}>GitHub</Link></li>
                <li><Link href={"/"}>Linkedin</Link></li>
              </ul>
           </div>
        </div>
    </footer>
   )
} 

export default Footer