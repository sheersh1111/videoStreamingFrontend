import './App.css';
import { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState('test1')

  function playVideo(e, videoId){
    e.preventDefault()
    setVideoId(videoId)
  }

  return (
    <div className="App">
      {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
      <div className='ButtonGroup'>
      <button onClick={(e)=>{playVideo(e, 'test1')}} className='m-2 btcustom'>Play Video 1</button>
      <button onClick={(e)=>{playVideo(e, 'test2')}} className='m-2 btcustom'>Play Video 2</button>
      <button onClick={(e)=>{playVideo(e, 'test3')}}className='m-2 btcustom'>Play Video 3</button>
    
      </div>
      </div>
  );
}

export default App;
