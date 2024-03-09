// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Image from "next/image";
// import AA from "./AA.jpeg";
// import FB from "./FB.jpeg";
// import Vignette from "./Vignette.jpeg";
// import Link from "next/link";
// import GitHubIcon from "@mui/icons-material/GitHub";

// export default function Projects() {
//   return (
//     <div className="proj-list">
//       <Card sx={{ maxWidth: 450 }}>
//         <CardMedia
//           component="div"
//           sx={{ height: 300 }}
//           title="Vignette">
//           <Typography gutterBottom variant="h5" component="div">
//             Vignette
//           </Typography>
//           <Image src={Vignette} alt="Vignette" title="Vignette" width={450} />
//         </CardMedia>
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             An innovative art gallery social media platform, enabling users to
//             curate their own virtual art galleries, share their creations,
//             explore, engage with, and follow fellow artists works, fostering a
//             vibrant online art community.
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Share</Button>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//       <Card sx={{ maxWidth: 400 }}>
//         <CardMedia
//           component="div"
//           sx={{ height: 300 }} 
//           title="Flatbuster Video"
//         >
//           <Image src={FB} alt="Flatbuster-Video" title="Flatbuster Video" width={450} />
//         </CardMedia>

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Flatbuster Video
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             An innovative art gallery social media platform, enabling users to
//             curate their own virtual art galleries, share their creations,
//             explore, engage with, and follow fellow artists works, fostering a
//             vibrant online art community.
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Share</Button>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//       <Card sx={{ maxWidth: 400 }}>
//         <CardMedia
//           component="div"
//           sx={{ height: 300 }} 
//           title="Audio Abyss"
//         >
//           <Image src={AA} alt="Audio Abyss" title="Audio Abyss" width={450} />
//         </CardMedia>

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Audio Abyss
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             An innovative art gallery social media platform, enabling users to
//             curate their own virtual art galleries, share their creations,
//             explore, engage with, and follow fellow artists works, fostering a
//             vibrant online art community.
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Share</Button>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//       <div className="proj-list">
//       <div className="proj">
//         <h2 className="proj-name">Vignette</h2>
//         <Image
//           src={Vignette}
//           alt="Vignette"
//           className="vignette-img"
//           layout="responsive"
//           width={800}
//           height={800}
//           />
//         <h1 className="description">
//           An innovative art gallery social media platform, enabling users to
//           curate their own virtual art galleries, share their creations,
//           explore, engage with, and follow fellow artists works, fostering a
//           vibrant online art community.
//         </h1>
//         <Link legacyBehavior href="https://github.com/wesmith3/Vignette">
//           <a className="github" target="_blank">
//             <GitHubIcon fontSize="large" />
//           </a>
//         </Link>
//       </div>
//       <div className="proj">
//         <h2 className="proj-name">Flatbuster Video</h2>
//         <Image
//           src={FB}
//           alt="FlatbusterVideo"
//           className="fb-img"
//           layout="responsive"
//           width={400}
//           height={800}
//           />
//         <h1 className="description">
//           Step into the virtual aisles of our Blockbuster-inspired website,
//           where you can register, peruse an extensive movie selection,
//           rent/return your favorites, share your thoughts through reviews.
//         </h1>
//         <Link
//           legacyBehavior
//           href="https://github.com/wesmith3/Flatbuster-Video"
//           >
//           <a className="github" target="_blank">
//             <GitHubIcon fontSize="large" />
//           </a>
//         </Link>
//       </div>
//       <div className="proj">
//         <h2 className="proj-name">Audio Abyss</h2>
//         <Image
//           src={AA}
//           alt="AudioAbyss"
//           className="aa-img"
//           layout="responsive"
//           width={800}
//           height={800}
//           />
//         <h1 className="description">
//           Discover new favorites through randomized song selections,
//           where you can listen, add to your playlist, and rate with a simple
//           like or dislike—an essential tool for music lovers craving fresh
//           beats.
//         </h1>
//         <Link legacyBehavior href="https://github.com/zachtalmadge/audio-abyss">
//           <a className="github" target="_blank">
//             <GitHubIcon fontSize="large" />
//           </a>
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// }

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AA from "./AA.jpeg";
import FB from "./FB.jpeg";
import Vignette from "./Vignette.jpeg";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  return (
    <div className="proj-list">
      <div className="card-container">
        {/* Card 1 */}
        <Card sx={{ maxWidth: 450, marginRight: 2 }} className="proj">
          <CardMedia
            component="div"
            sx={{ height: 300 }}
            title="Vignette"
          >
            <Typography gutterBottom variant="h5" component="div" className="proj-name">
              Vignette
            </Typography>
            <Image src={Vignette} alt="Vignette" title="Vignette" width={400} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="white">
              An innovative art gallery social media platform, enabling users to
              curate their own virtual art galleries, share their creations,
              explore, engage with, and follow fellow artists works, fostering a
              vibrant online art community.
            </Typography>
          </CardContent>
          <CardActions>
          <Link
          legacyBehavior
          href="https://github.com/wesmith3/Vignette"
          >
          <a className="github" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
          </CardActions>
        </Card>

        {/* Card 2 */}
        <Card sx={{ maxWidth: 400, marginRight: 2 }} className="proj">
          <CardMedia
            component="div"
            sx={{ height: 300 }}
            title="Flatbuster Video">
            <Typography gutterBottom variant="h5" component="div" className="proj-name">
              Flatbuster Video
            </Typography>
            <Image src={FB} alt="Flatbuster-Video" title="Flatbuster Video" width={400} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="white">
            Step into the virtual aisles of our Blockbuster-inspired website,
           where you can register, peruse an extensive movie selection,rent/return your favorites, share your thoughts through reviews.
            </Typography>
          </CardContent>
          <CardActions>
          <Link
          legacyBehavior
          href="https://github.com/wesmith3/Flatbuster-Video"
          >
          <a className="github" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
          </CardActions>
        </Card>

        {/* Card 3 */}
        <Card sx={{ maxWidth: 400 }} className="proj">
          <CardMedia
            component="div"
            sx={{ height: 300 }}
            title="Audio Abyss">
            <Typography gutterBottom variant="h5" component="div" className="proj-name">
              Audio Abyss
            </Typography>
            <Image src={AA} alt="Audio Abyss" title="Audio Abyss" width={400} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="white">
            Discover new favorites through randomized song selections,
             where you can listen, add to your playlist, and rate with a simple
             like or dislike—an essential tool for music lovers craving fresh
             beats.
            </Typography>
          </CardContent>
          <CardActions>
          <Link
          legacyBehavior
          href="https://github.com/zachtalmadge/audio-abyss"
          >
          <a className="github" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}