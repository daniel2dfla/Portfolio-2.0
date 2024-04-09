import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Backend developer with 7 months of experience through an internship at Voltz company..</p>
          <div className="experience-time">
            <Skill image="/icon-js.png" measure={2} years="2 years"/>
            <Skill image="/icon-ts.png" measure={2} years="2 years"/>
            <Skill image="/icon-react.png" measure={2} years="2 years"/>
            <Skill image="/icon-nest.png" measure={1} years="7 months"/>
            <Skill image="/icon-java.png" measure={1} years="7 months"/>
          </div>
        </div>
    )
}