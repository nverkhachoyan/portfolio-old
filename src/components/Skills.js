import skillsData from "../assets/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="headline-wrapper">
        <h1 className="headline">Skills</h1>
        <i className="fa-solid fa-code skills-headline-icon"></i>
      </div>
      <div className="skills">
        {skillsData.map((elem, index) => (
          <div className="skill" key={index}>
            <i
              className={`${elem.icon} skill-icon-${elem.title.toLowerCase()}`}
            ></i>
            <h3 className="skill-title">{elem.title}</h3>
            <p className="skill-description">{elem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
