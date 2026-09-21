import Image from "next/image";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Benefits from "./components/benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Benefits />
    </>
  );
}
