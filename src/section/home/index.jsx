import fundo from '../home/image/Matrix.png'

import './home.css'

import { FaLinkedin, FaFacebook, FaInstagram, FaGithub} from "react-icons/fa"

import foto from '../home/image/foto.jpeg'

export default function Home(){

    return(
        <div id="home" className="home">
            <div className="imgHome"
            style={{
                backgroundImage: `url(${fundo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
            }}
            >
            <div className='title'>
            <div class="box">
            <img src={foto}/>
      <h1>Moisés Fernandes</h1>
      <span>Cuiabá, Brasil</span>
      <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
      <ul class="redes-sociais"></ul>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100043871915015" target="_blank"
            ><FaFacebook size={24}/>
            </a>
        </li>
        <li>
          <a href="https://www.instagram.com/moises.fernandes03/?fbclid=IwAR2Pd9tpn2mTo27QW3Mti7_mhxFr7VUkrldeTZ8EUMHcJqGaEY48YKiwhrQ" target="_blank"
            ><FaInstagram size={24}/>
            </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mois%C3%A9s-fernandes-110a46208/" target="_blank"
            ><FaLinkedin size={24}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Moises0011" target="_blank"
            ><FaGithub size={24}/>
          </a>
        </li>
      </ul>
    </div>
            </div>

            </div>
            
        </div>
    )
}