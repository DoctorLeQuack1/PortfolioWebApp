import { NavBar } from "./components/NavBar";
import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";

export const App = () => {

  return (
    <div className="bg-black text-primary-emphasis">
      <header className="sticky-top" style={{ backdropFilter: "blur(10px)"}}>
        <NavBar />
      </header>

      <main>
          <AboutMe/> 
          <Portfolio/>
      </main>
    </div>

  )
}