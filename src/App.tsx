import { NavBar } from "./components/NavBar";
import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";
export const App = () => {

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
          <AboutMe/> 
          <Portfolio/>       
      </main>
    </div>

  )
}