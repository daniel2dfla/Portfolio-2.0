import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { Projects } from "./components/projects/projects";
import { SocialBtns } from "./components/social-btns/social-btns";
import "./styles/home.scss"

export default function Home() {
  return (
    <div className="container">
      <main className="container-grid">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="primary-btn" href="mailto:daniel_2dfla@hotmail.com">Contact me ✉️</a>
          <a className="primary-btn" href="https://my-curriculo-daniel-backend.s3.us-east-1.amazonaws.com/Curriculo-Backend-Programador.pdf" target="_blank">curriculum vitae 🗒️</a>
        </div>
      </main>
      <Projects/>
    </div>
  );
}
