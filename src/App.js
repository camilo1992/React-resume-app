import Intro from "./components/introduction/Intro";
import NavBar from "./components/navBar/NavBar";
import Layout from "./components/layout/Layout";
import Projects from "./components/projects/Projects";
import Hobbies from "./components/hobbies/Hobbies";
import Social from "./components/social/Social";
function App() {
  return (
    <div>
      <NavBar />
      <Layout>
        <Intro />
        <Projects />
        <Hobbies />
        <Social />
      </Layout>
    </div>
  );
}

export default App;
