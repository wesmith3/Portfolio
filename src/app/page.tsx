import Image from "next/image";
import name from '../public/Name.jpeg'
import Footer from "./Footer";
import Name from "./Name";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <Name />
        {/* <Image
          src={name}
          className="name"
          alt="name"
          width={500}
        /> */}
        <Footer />
      </div>
    </main>
  );
}
