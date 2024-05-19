import { useState } from "react";
import Buttons from '../Section/Section-Btn';
import {Data} from '../../data';

export default function TabContent(){
const [selectedTopic, setSelectedTopic] = useState();

function handleClick(SelectedBtn) {
  setSelectedTopic(SelectedBtn);
  console.log(selectedTopic);
}

let tabContent = <h2>PLS SELECT A TOPIC</h2>;

if (selectedTopic) {
  tabContent = (
    <div className="tab-content">
      <h3>{Data[selectedTopic].title}</h3>
      <p>{Data[selectedTopic].definition}</p>
    </div>
  );
}
return(
<section className="button-section">
          <menu>
            <p>Terminilogies for learning react</p>

            <Buttons onSelect={() => handleClick("Components")}>
              Components
            </Buttons>
            <Buttons onSelect={() => handleClick("Jsx")}>JSX</Buttons>
            <Buttons onSelect={() => handleClick("Props")}>PROPS</Buttons>
            <Buttons onSelect={() => handleClick("States")}>States</Buttons>
          </menu>
          {tabContent}
        </section>
)
}