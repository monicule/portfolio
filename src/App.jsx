import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { HomeHero } from "./components/hero/HomeHero.jsx";
import { Projects } from "./components/projects/Projects.jsx";
import { Contacts } from "./components/contacts/Contacts.jsx";

export function App() {
  return (
    <>
    <ScrollToHashElement behavior="smooth" inline="center" block="center"/>
    <Header />
    <HomeHero />
    <Projects />
    <Contacts />
    <Footer />
    </>
  )
}

