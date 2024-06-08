import GreenButton from "./components/greenButton";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center ">
        <div className="text-[#ff7c17] font-bold">Hello</div>
        <div>World!</div>
        <Hero />

        <GreenButton />
      </main>
    </>
  );
}
