import Footer from "./components/footer";
import GreenButton from "./components/greenButton";
import Hero from "./components/hero";
import NavbarMenu from "./components/navbarMenu";

export default function Home() {
  return (
    <>
      <main>
        <NavbarMenu />
        <Hero
          title="Utilize a nossa Calculadora CME"
          subtitle="Receba um relatório detalhado com equipamentos e marcas que realmente atendem às suas necessidades."
        />

        <GreenButton />
        <Footer />
      </main>
    </>
  );
}
