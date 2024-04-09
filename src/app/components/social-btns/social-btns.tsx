import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkdin-icon";
import "./social-btns.scss"

export function SocialBtns(){
    return (
        <div className="social">
            <a href="https://www.instagram.com/daniel.naascimento/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://github.com/daniel2dfla" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/daniel-firmiano-desenvolvedor/" target="_blank">
                <LinkedinIcon/>
            </a>
        </div>
    )
}