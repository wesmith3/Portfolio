import Footer from "./Footer";
import Name from "./Name";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <TechStack />
        <Name />
        <Footer />
      </div>
    </main>
  );
}
