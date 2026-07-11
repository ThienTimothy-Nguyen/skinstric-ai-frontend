import HeroDesktop from "@/components/home/HeroDesktop";
import HeroMobile from "@/components/home/HeroMobile";

export default function Home() {
  return (
    <main className="h-full w-full overflow-hidden">
      <HeroDesktop />
      <HeroMobile />
    </main>
  );
}
