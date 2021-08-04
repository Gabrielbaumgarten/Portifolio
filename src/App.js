import React, {useState} from 'react'
import './App.css';
import './Animations.css'

import Akira from './assets/Pagina_Akira.png'
import SpiderMan from './assets/Pagina_SpiderMan.png'
import LinaPDF from './assets/Pagina_LinaPDF.png'
import Exchange from './assets/SiteExchange.png'


import { Carousel } from 'primereact/carousel';

import 'primereact/resources/themes/rhea/theme.css'
import 'primereact/resources/primereact.min.css'
import "primeicons/primeicons.css"

import photo from './assets/GabrielBaumgarten02.png'

function App() {

  const [paginas, setPaginas] = useState([{
    nome: 'Projeto Akira',
    imagem: Akira,
    url: 'http://www.google.com',
  },{
    nome: 'Projeto SpiderMan',
    imagem: SpiderMan,
    url: 'https://spidermannasseryousef.netlify.app/',
  },{
  },{
    nome: 'Projeto Lina PDF',
    imagem: LinaPDF,
    url: 'https://linapdf.netlify.app/',
  },{
    nome: 'Projeto Exchange',
    imagem: Exchange,
    url: 'https://exchangecoins.netlify.app/',
  },])

  function productTemplate(item) {
    return (
        <div className="item-carousel">
          <div className="item-carousel-content">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.imagem} alt={item.nome} />
              <h4 className="p-mb-1">{item.nome}</h4>
            </a>
          </div>
        </div>
    );
  }

  function ativaObjeto(){
    var divSobre = document.getElementById('sobre')
    var divHabilidades = document.getElementById('habilidades')
    var divProjetos = document.getElementById('projetos')
    var divContato = document.getElementById('contatos')

    if(divSobre.getBoundingClientRect().top - window.innerHeight < -100){
      divSobre.classList.add('entrada')
    }
    if(divHabilidades.getBoundingClientRect().top - window.innerHeight < -100){
      divHabilidades.classList.add('entrada')
    }
    if(divProjetos.getBoundingClientRect().top - window.innerHeight < -100){
      divProjetos.classList.add('entrada')
    }
    if(divContato.getBoundingClientRect().top - window.innerHeight < -100){
      divContato.classList.add('entrada')
    }
  }

  window.addEventListener('scroll', ativaObjeto)

  return (
    <div className="App">
      <div className="home">
        <div className="barra-lateral">

          <p>Gabriel Baumgarten</p>

          <hr/>

          <div id='social-media' className='social-media'>

            {/* Icone Facebook */}
            <a href='https://www.facebook.com/gabriel.baumgarten.7/' target='__blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#4D4D4D"/>
              </svg>
            </a>

            {/* Icone Instagram*/}
            <a href='https://www.instagram.com/gabriel_baumgarten/' target='__blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z" fill="#4D4D4D"/>
              </svg>
            </a>

            {/* Icone Linkedin */}
            <a href='https://www.linkedin.com/in/gabriel-baumgarten-a71a20203/' target='__blank'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.399994C4.69802 0.399994 0.400024 4.69799 0.400024 9.99999C0.400024 15.302 4.69802 19.6 10 19.6C15.302 19.6 19.6 15.302 19.6 9.99999C19.6 4.69799 15.302 0.399994 10 0.399994ZM7.65002 13.979H5.70602V7.72299H7.65002V13.979ZM6.66602 6.95499C6.05202 6.95499 5.65502 6.51999 5.65502 5.98199C5.65502 5.43299 6.06402 5.01099 6.69102 5.01099C7.31802 5.01099 7.70202 5.43299 7.71402 5.98199C7.71402 6.51999 7.31802 6.95499 6.66602 6.95499ZM14.75 13.979H12.806V10.512C12.806 9.70499 12.524 9.15699 11.821 9.15699C11.284 9.15699 10.965 9.52799 10.824 9.88499C10.772 10.012 10.759 10.192 10.759 10.371V13.978H8.81402V9.71799C8.81402 8.93699 8.78902 8.28399 8.76302 7.72199H10.452L10.541 8.59099H10.58C10.836 8.18299 11.463 7.58099 12.512 7.58099C13.791 7.58099 14.75 8.43799 14.75 10.28V13.979Z" fill="#4D4D4D"/>
              </svg>
            </a>

          </div>

        </div>

      
        <div className="container">
          <div className="nav-bar">

            <a href="#sobre">Sobre</a>

            <a href="#projetos">Projetos</a>

            <a href="#contatos">Contato</a>

          </div>

          <div className='main-content'>
            <div className='main-name'>
              <p>Gabriel</p><p> Baumgarten</p>
            </div>

            <div className='photo'>
                <img src={photo} alt="Gabriel Baumgarten" />
            </div>
          </div>

        </div>

      </div>

      <div id='sobre' className='informacoes-pessoais'>

        <div className="about-me">
          <h1>Sobre</h1>
          <p>Olá, meu chamo Gabriel, sou estudante de Sistemas de Informção na UTFPR.
            Adoro resolver problemas e propor soluções em que possa usar minha criatividade.
            Em meu tempo livre, gosto de praticar esportes, como Muay Thai, o qual pratico desde os 16 anos. 
          </p>
        </div>

        <hr/>

        <div className="formacao-academica">
          <h1>Formação Acadêmica</h1>
          <p>Cursando Bacharela em Sistemas de Informação na UTFPR</p>
        </div>

      </div>

      <div id='habilidades' className='habilities'>

        <h1>Habilidades</h1>

        <div className='all-habilities'>

          <div className="habilidades-tecnicas">
            <h1>Técnicas</h1>

            <div className="habilidade">
              <p>HTML</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '75%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>CSS</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '60%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>JavaScript</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '50%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>Python</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '45%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>Java</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '40%'}}></div>
              </div>
            </div>

          </div>

          <div id='habilidades' className="habilidades-pessoais">
            <h1>Pessoais</h1>

            <div className="habilidade">
              <p>Comunicação</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>Trabalho em Grupo</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>Criatividade</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>

            <div className="habilidade">
              <p>Dedicação</p>

              <div className="progress">
                <div className="progress-bar" style={{width: '90%'}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div id='projetos' className="projects">

        <h1>Projetos</h1>

        <div className="carousel">
          <Carousel value={paginas} itemTemplate={productTemplate} numVisible={1} circular autoplayInterval={3000} orientation="horizontal" />
        </div>

      </div>

      <footer id='contatos' className="contact">

        <h1>Contato</h1>

        <div className='contatos'>

          <div className="contact-social-media">


            <a href='https://www.facebook.com/gabriel.baumgarten.7/' target='__blank'>
              <div>
                {/* Icone Facebook */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#4D4D4D"/>
                  </svg>

                <p>Gabriel Baumgarten</p>
              </div>
            </a>

            <a href='https://www.instagram.com/gabriel_baumgarten/' target='__blank'>
              <div>

                {/* Icone Instagram*/}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z" fill="#4D4D4D"/>
                  </svg>

                  <p>Gabriel_Baumgarten</p>
              </div>
            </a>

            <a href='https://www.linkedin.com/in/gabriel-baumgarten-a71a20203/' target='__blank'>
              <div>

                  {/* Icone Linkedin */}  
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.399994C4.69802 0.399994 0.400024 4.69799 0.400024 9.99999C0.400024 15.302 4.69802 19.6 10 19.6C15.302 19.6 19.6 15.302 19.6 9.99999C19.6 4.69799 15.302 0.399994 10 0.399994ZM7.65002 13.979H5.70602V7.72299H7.65002V13.979ZM6.66602 6.95499C6.05202 6.95499 5.65502 6.51999 5.65502 5.98199C5.65502 5.43299 6.06402 5.01099 6.69102 5.01099C7.31802 5.01099 7.70202 5.43299 7.71402 5.98199C7.71402 6.51999 7.31802 6.95499 6.66602 6.95499ZM14.75 13.979H12.806V10.512C12.806 9.70499 12.524 9.15699 11.821 9.15699C11.284 9.15699 10.965 9.52799 10.824 9.88499C10.772 10.012 10.759 10.192 10.759 10.371V13.978H8.81402V9.71799C8.81402 8.93699 8.78902 8.28399 8.76302 7.72199H10.452L10.541 8.59099H10.58C10.836 8.18299 11.463 7.58099 12.512 7.58099C13.791 7.58099 14.75 8.43799 14.75 10.28V13.979Z" fill="#4D4D4D"/>
                  </svg>

                  <p>Gabriel Baumgarten</p>
              </div>
            </a>

          </div>

          <div className="other-contacts">

              <div>
                {/* Icone email */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.25 18.8688V34.375C6.25 36.0326 6.90848 37.6223 8.08058 38.7944C9.25268 39.9665 10.8424 40.625 12.5 40.625H37.5C39.1576 40.625 40.7473 39.9665 41.9194 38.7944C43.0915 37.6223 43.75 36.0326 43.75 34.375V15.625C43.75 13.9674 43.0915 12.3777 41.9194 11.2056C40.7473 10.0335 39.1576 9.375 37.5 9.375H12.5C10.8424 9.375 9.25268 10.0335 8.08058 11.2056C6.90848 12.3777 6.25 13.9674 6.25 15.625V18.8688ZM12.5 12.5H37.5C38.3288 12.5 39.1237 12.8292 39.7097 13.4153C40.2958 14.0013 40.625 14.7962 40.625 15.625V17.9375L25 26.35L9.375 17.9375V15.625C9.375 14.7962 9.70424 14.0013 10.2903 13.4153C10.8763 12.8292 11.6712 12.5 12.5 12.5ZM9.375 21.4875L24.2594 29.5C24.487 29.6225 24.7415 29.6867 25 29.6867C25.2585 29.6867 25.513 29.6225 25.7406 29.5L40.625 21.4875V34.375C40.625 35.2038 40.2958 35.9987 39.7097 36.5847C39.1237 37.1708 38.3288 37.5 37.5 37.5H12.5C11.6712 37.5 10.8763 37.1708 10.2903 36.5847C9.70424 35.9987 9.375 35.2038 9.375 34.375V21.4875Z" fill="#4D4D4D"/>
                </svg>

                <p>gabrielbaumgarten@hotmail.com</p>

              </div>

              <div>
                {/* Icone telefone */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.8271 11.6553L37.6269 6.45996C36.9922 5.8252 36.1426 5.46875 35.2441 5.46875C34.3457 5.46875 33.4961 5.82031 32.8613 6.45996L27.2607 12.0508C26.626 12.6855 26.2695 13.54 26.2695 14.4385C26.2695 15.3418 26.6211 16.1865 27.2607 16.8262L31.6357 21.2061C30.6391 23.5283 29.2071 25.6382 27.417 27.4219C25.625 29.2236 23.5303 30.6445 21.2061 31.6504L16.8311 27.2705C16.1963 26.6357 15.3467 26.2793 14.4482 26.2793C14.0051 26.2777 13.5661 26.3645 13.1569 26.5347C12.7477 26.7049 12.3767 26.9551 12.0654 27.2705L6.45996 32.8613C5.8252 33.4961 5.46875 34.3506 5.46875 35.249C5.46875 36.1523 5.82031 36.9971 6.45996 37.6367L11.6553 42.832C12.7393 43.916 14.2334 44.5361 15.7666 44.5361C16.084 44.5361 16.3916 44.5117 16.7041 44.458C23.1689 43.3936 29.585 39.9512 34.7656 34.7754C39.9414 29.5898 43.3789 23.1738 44.4531 16.7041C44.7607 14.8682 44.1455 12.9785 42.8271 11.6553ZM40.9912 16.123C40.0391 21.8799 36.9434 27.6221 32.2803 32.2852C27.6172 36.9482 21.8799 40.0439 16.123 40.9961C15.4004 41.1182 14.6582 40.874 14.1309 40.3516L9.02832 35.249L14.4385 29.834L20.2881 35.6934L20.332 35.7373L21.3867 35.3467C24.5846 34.1709 27.4886 32.3139 29.8974 29.9042C32.3062 27.4945 34.1623 24.5899 35.3369 21.3916L35.7275 20.3369L29.8291 14.4434L35.2393 9.02832L40.3418 14.1309C40.8691 14.6582 41.1133 15.4004 40.9912 16.123Z" fill="#4D4D4D"/>
                </svg>


                <p>(41) 99993-9342</p>

              </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;
