import Image from "next/image";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Benefits from "./components/benefits";
import ForWork from "./components/forWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Benefits />
      <ForWork />
    </>
  );
}
