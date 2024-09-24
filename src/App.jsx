import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { HomeHero } from "./components/hero/HomeHero.jsx";
import { Projects } from "./components/projects/Projects.jsx";
import { Contacts } from "./components/contacts/Contacts.jsx";

export function App() {
  return (
    <>
    < Header />
    < HomeHero />
    < Projects />
    < Contacts />
    < Footer />
    </>
  )
}

