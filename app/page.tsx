import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import LiveCounter from "@/components/LiveCounter";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Timeline />
      <LiveCounter />
      <Closing />
    </main>
  );
}
