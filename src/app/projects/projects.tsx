import Image from "next/image";
import AA from "./AA.jpeg";
import FB from "./FB.jpeg";
import Vignette from "./Vignette.jpeg";

export default function Projects() {
  return (
    <div className="proj-list">
      <div className="proj">
        <h2 className="proj-name">Vignette</h2>
        <Image
          src={Vignette}
          alt="Vignette"
          className="vignette-img"
          layout="responsive"
          width={800}
          height={800}
        />
        <h1 className="description">
          An innovative art gallery social media platform,
          enabling users to curate their own virtual art galleries, share their
          creations, explore, engage with, and follow fellow artists works,
          fostering a vibrant online art community.
        </h1>
      </div>
      <div className="proj">
        <h2 className="proj-name">Flatbuster Video</h2>
        <Image
          src={FB}
          alt="FlatbusterVideo"
          className="fb-img"
          layout="responsive"
          width={400}
          height={800}
        />
      </div>
      <div className="proj">
        <h2 className="proj-name">Audio Abyss</h2>
        <Image
          src={AA}
          alt="AudioAbyss"
          className="aa-img"
          layout="responsive"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
