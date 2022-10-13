import { FaJava, FaPython, FaHtml5, FaCss3, FaReact, FaIcons } from "react-icons/fa";

import {SiPostgresql} from "react-icons/Si";

import htmlimage from '../home/image/htmlimage.png';

import cssimage from '../home/image/cssimage.png';

import pythonimage from '../home/image/pythonimage.png';

import reactimage from '../home/image/reactimage.png';

import postgresqlimage from '../home/image/postgresqlimage.png';

import javaimage from '../home/image/javaimage.png';


export default function Sobre(){

    return(

      <div class='box'>
        
        <div className='sobre'>
            <h1>Sobre mim</h1>
            <h2>Meu nome é Moisés tenho 19 anos e sou um apaixonado por tecnologia. Meu primeiro contato com programação foi no ano de 2020, estava finalizando o ensino medio e pensando em qual curso que envolve a tecnologia que eu pudesse iniciar, em fevereiro de 2021 decidi cursar Analise e Desenvolvimento de Sistemas na faculdade Invest. No meado do ano que vem vou conseguir formar nesse curso que estou gostando bastante. E pretendo continuar a aprimorar minhas habilidades em uma pós-graduação em Front-End.</h2>
        </div>

        <br />

        <div className='projetos'>
            <h1>Projetos</h1>
            <h2>Também tenho alguns projetos que fiz ao longo da minha vida estudando sobre tecnologia, esses projetos estão armazenados na minha conta do GitHub.</h2>
            <a href="https://github.com/Moises0011/Ex2">Projeto de Java</a> <a href="https://github.com/Moises0011/curso-react">Projeto de React</a> <a href="https://github.com/Moises0011/CalculoImc">Projeto de Python</a>
        </div>

        <br />

        <div className='habilidades'>
            <h1>Habilidades</h1>
            <h2>Seguintes tecnologias que eu tenho um conhecimento.</h2>

            <img src={javaimage}/>
            <img src={pythonimage}/>
            <img src={htmlimage}/>
            <img src={cssimage}/>
            <img src={reactimage}/>
            <img src={postgresqlimage}/>
            
        </div>

      </div>
    )
}