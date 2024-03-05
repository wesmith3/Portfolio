import Image from 'next/image'
import AA from './AA.jpeg'
import FB from './FB.jpeg'
import Vignette from './Vignette.png'

export default function Projects() {
  return (
    <div className='proj-list'>
        <div className='proj'>
        <h1 className='proj-name'>Vignette</h1>
        <Image src={Vignette} alt='Vignette' className='vignette-img' layout='responsive' width={800} height={800}/>
        </div>
        <div className='proj'>
        <h1 className='proj-name'>Flatbuster Video</h1>
        <Image src={FB} alt='FlatbusterVideo' className='fb-img' layout='responsive' width={800} height={800}/>
        </div>
        <div className='proj'>
        <h1 className='proj-name'>Audio Abyss</h1>
        <Image src={AA} alt='AudioAbyss' className='aa-img' layout='responsive' width={800} height={800}/>
        </div>
    </div>
  )
}
