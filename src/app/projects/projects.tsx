import Image from "next/image";
import AA from "./AA.jpeg";
import FB from "./FB.jpeg";
import Vignette from "./Vignette.jpeg";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          An innovative art gallery social media platform, enabling users to
          curate their own virtual art galleries, share their creations,
          explore, engage with, and follow fellow artists works, fostering a
          vibrant online art community.
        </h1>
        <Link legacyBehavior href="https://github.com/wesmith3/Vignette">
          <a className="gh-icon" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
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
        <h1 className="description">
          Step into the virtual aisles of our Blockbuster-inspired website,
          where you can register, peruse an extensive movie selection,
          rent/return your favorites, share your thoughts through reviews.
        </h1>
        <Link
          legacyBehavior
          href="https://github.com/wesmith3/Flatbuster-Video"
        >
          <a className="gh-icon" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
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
        <h1 className="description">
          Explore endless music possibilities with our app&apos;s diverse song
          library. Discover new favorites through randomized song selections,
          where you can listen, add to your playlist, and rate with a simple
          like or dislike—an essential tool for music lovers craving fresh
          beats.
        </h1>
        <Link legacyBehavior href="https://github.com/zachtalmadge/audio-abyss">
          <a className="gh-icon" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
      </div>
    </div>
  );
}
