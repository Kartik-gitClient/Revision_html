//adding greet names
const names = ["yuvii", "krishna", "harish", "sakshi"];
function getRandomname(max) {
  return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ["fundamentals", "core", "crucial"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const head = reactDescriptions[getRandomInt(2)];
const greet = names[getRandomname(2)];


export default  function Header() {
  return (
    <header>
      <nav class="navbar">
        <h1 class="logo">KEN workshop</h1>
        <ul class="nav-links">
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="index.html">ABOUT</a>
          </li>
          <li>
            <a href="index.html">CONTACT</a>
          </li>
        </ul>
      </nav>
      <h1>Hii,{greet} ,</h1>

      <h2>My name is kartik</h2>
      <h4>{head} Concepts for Frontend Development</h4>

      
    </header>
  );
}
