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
        </div>
      </main>
      <Projects/>
    </div>
  );
}
