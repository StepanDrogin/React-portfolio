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
            <p className="softskills__item_p">I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
            </div>
            <div className="softskills__item">
            <img alt="icon" src={Willingness} className="softskills__item_icon">
            </img>
            <h3 className="softskills__item_h3">Willingness to learn</h3>
            <p className="softskills__item_p">Use the power of Webflow CMS to add new case studies, blog posts, categories and tags.
We're always glad to help, so don’t hesitate to contact us if you have any questions.</p>
            </div>
            <div className="softskills__item">
            <img alt="icon" src={Solving} className="softskills__item_icon">
            </img>
            <h3 className="softskills__item_h3">Problem-solving</h3>
            <p className="softskills__item_p">Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.
Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.</p>
            </div>
            </div>
        </div>
        </div>
    )
};