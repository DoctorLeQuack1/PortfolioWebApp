import { NavBar } from "./components/NavBar";
import { AboutMe } from "./pages/AboutMe";
export const App = () => {

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
          <AboutMe/>        
      </main>
    </div>

  )
}