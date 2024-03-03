import Footer from "./Footer";
import Name from "./Name";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <Name />
        <Footer />
      </div>
    </main>
  );
}
