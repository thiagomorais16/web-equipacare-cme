import About from "../components/about";
import Footer from "../components/footer";
import FormSection from "../components/formSection";
import GreenButton from "../components/greenButton";
import Hero from "../components/hero";
import NavbarMenu from "../components/navbarMenu";

export default function Home() {
  return (
    <>
      <main>
        <NavbarMenu />
        <Hero
          title="Experimente a nossa Calculadora CME"
          subtitle="
          Receba um relatório personalizado e detalhado com recomendações de equipamentos e marcas que atendem perfeitamente às suas necessidades."
        />
        <About />
        <FormSection />
        <Footer />
      </main>
    </>
  );
}
