
export default function CoreSkill(skill) {
    return (
      <>
          <li>
          <img src={skill.img} alt="img" height="100px"></img>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </li>
        </>
    );
}



