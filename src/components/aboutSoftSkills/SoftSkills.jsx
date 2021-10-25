import "../aboutSoftSkills/softskills.scss"
import Communication from "../../assets/svg/communication.svg"
import Willingness from "../../assets/svg/student.svg"
import Solving from "../../assets/svg/mental.svg"

export default function SoftSkills() {
    return (
        <div className="container">
        <div className="softskills">
            <h2 className="softskills__h2">
                Soft Skills
            </h2>
            <div className="softskills__items">
            <div className="softskills__item">
            <img alt="icon" src={Communication} className="softskills__item_icon">
            </img>
            <h3 className="softskills__item_h3">Good communication</h3>
            <p className="softskills__item_p">I can understand instructions, acquiring new skills, making requests, asking questions and relaying information with ease.</p>
            </div>
            <div className="softskills__item">
            <img alt="icon" src={Willingness} className="softskills__item_icon">
            </img>
            <h3 className="softskills__item_h3">Willingness to learn</h3>
            <p className="softskills__item_p">I like learning new technologies and adopting skills and knowledge and the best practices from more experienced developers.</p>
            </div>
            <div className="softskills__item">
            <img alt="icon" src={Solving} className="softskills__item_icon">
            </img>
            <h3 className="softskills__item_h3">Problem-solving</h3>
            <p className="softskills__item_p">Defining the problem, identifying the scope and finally, organising every project.
            I also believe that the ability to use search engines to find the information you need is a very important skill for any developer and I try to improve it.</p>
            </div>
            </div>
        </div>
        </div>
    )
};