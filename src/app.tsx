import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { InStudio } from "./components/in-studio";
import { Services } from "./components/services";
import { Studio } from "./components/studio";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Studio />
        <Services />
        <InStudio />
        <About />
      </main>
      <Footer />
    </>
  );
}
