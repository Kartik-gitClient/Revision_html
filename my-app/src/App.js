
import "./App.css";
import logo from "./logo.svg";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import Header from "./Components/Header/Header";
import CoreSkill from "./Components/Section/Section";
import TabContent from "./Components/Tab-Component/tab";

function App() {
 
  return (
    <>
      <Header />

      <main>
        <section className="section-Div">
          <ul>
            <CoreSkill
              title="HTML"
              description="HYPER TEXT MARKUP LANGUAGE is the standard markup language for documents designed to be displayed 
              in a web browser.It defines the content and structure of web content. It is often assisted by technologies such 
              as Css and JavaScript."
              img={html}
            />
            <CoreSkill
              title="CSS"
              description="CASCADING STYLE SHEETS is a style sheet language used for specifying the presentation and styling
              of a document written in a markup language such as HTML . CSS is a cornerstone technology of the W W W
               alongside HTML and JavaScript."
              img={css}
            />
            <CoreSkill
              title="JS"
              description="JAVASCRIPT-A PROGRAMMING LANGUAGE and core technology of the Web,
            alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers
             have a dedicated JavaScript engine that executes the client code."
              img={js}
            />
            <CoreSkill contenteditable
              title="REACT JS"
              description="REACT JS : A JAVASCRIPT LIBRARY for building user interfaces based on 
              components. It is maintained by Meta  React can be used to
               develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
              img={logo}
            />
          </ul>

          <TabContent />
        </section>
         
        <section>
          
        </section>
      </main>
    </>
  );
}

export default App;
