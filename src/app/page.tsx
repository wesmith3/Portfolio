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
          width={500}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
