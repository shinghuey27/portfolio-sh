import "./App.css";
import Blog from "./components/Blog";
import Frontend from "./components/Frontend";
import Project from "./components/Project";
import Summary from "./components/Summary";

function App() {
  return (
    <main>
      <div className="d-flex-column">
        <Summary />
        <div className="d-flex-row">
          <Frontend />
          <Blog />
        </div>
        <Project />
      </div>
    </main>
  );
}

export default App;
