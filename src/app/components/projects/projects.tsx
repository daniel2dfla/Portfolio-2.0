import "./projects.scss"
import Image from 'next/image'

export function Projects() {

  return (
    <div className='projects'>
      <h1>My projects!</h1>
      <h2>Front end: </h2>
      <div className="section">
          <a href='https://github.com/daniel2dfla/Projeto-Labex#login-e-senha-para-teste' target="_blank" rel="noopener noreferrer">
          <Image
                    src="/LabeX.jpg"
                    alt="Projeto Labex"
                    width={325}
                    height={370}
                    priority
            />
            <p>LabeX</p>
          </a>
          <a href='https://github.com/daniel2dfla/Pokedex' target="_blank" rel="noopener noreferrer">
          <Image
                    src="/pikachu.jpg"
                    alt="Projeto Pokedex"
                    width={325}
                    height={370}
                    priority
            />
                <p>PokedeX</p>
            </a>
            <a href='https://github.com/daniel2dfla/Secret-Word' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/forca1.png"
                    alt="Projeto Secret-Word"
                    width={325}
                    height={370}
                    priority
            />
                <p>SecretWord</p>
            </a>
            <a href='https://github.com/daniel2dfla/LabeFood' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/lanche.jpg"
                    alt="Projeto Secret-Word"
                    width={325}
                    height={370}
                    priority
            />
                <p>LabeFood</p>
            </a>
      </div>
      <h2>Back end: </h2>
      <div className="section">
          <a href='https://github.com/daniel2dfla/Restaurant-API' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/restaurant.jpg"
                    alt="Restaurant-API"
                    width={325}
                    height={370}
                    priority
            />
            <p>Restaurant-API</p>
          </a>
          <a href='https://github.com/daniel2dfla/desafio-backend' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/tool.jpg"
                    alt="Desafio Back-end CRUD"
                    width={325}
                    height={370}
                    priority
            />
            <p>Desafio Back-end CRUD</p>
          </a>
          <a href='https://github.com/daniel2dfla/Pass-in-NLW' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/events.jpg"
                    alt="Pass-in-NLW"
                    width={325}
                    height={370}
                    priority
            />
            <p>Pass-in-NLW</p>
          </a>
          <a href='https://github.com/daniel2dfla/Rest-API-Estacionamento' target="_blank" rel="noopener noreferrer">
            <Image
                    src="/estacionamento.jpg"
                    alt="Rest-API-Estacionamento"
                    width={325}
                    height={370}
                    priority
            />
            <p>Rest-API-Estacionamento</p>
          </a>
      </div>
    </div>
  )
}