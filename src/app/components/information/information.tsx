import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="info">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>PT - Native Speaker</span>
                <span>EN - intermediary</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Studying Analysis and Systems Development - Universidade Anhanguera</span>
            </div>
        </div>
    )
}