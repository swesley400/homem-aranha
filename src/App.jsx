import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactPlayer from 'react-player';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1>Video Player do Wes</h1>
      <div>
      <ReactPlayer
            url="https://wes-videos.s3.us-east-2.amazonaws.com/Homem-Aranha.Atraves.do.Aranhaverso.2023.1080p.HDRip.H264.DUBLADO-LAPUMiA.mkv"
            width="100%"
            height="100%"
            controls
        />
      </div>
    </>
  )
}

export default App
