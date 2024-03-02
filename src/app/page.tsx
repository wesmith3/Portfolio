import Image from "next/image";
import name from '../public/Name.jpeg'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <Image
          src={name}
          className="name"
          alt="Next.js Logo"
          width={1000}
          height={500}
          priority
        />
      </div>
    </main>
  );
}
