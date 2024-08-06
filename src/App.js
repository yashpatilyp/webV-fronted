import './App.css';


import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';


  

function App() {
  return (
    <div className="App">
     <div className="heading">
     <h2>Video Chat</h2>
     </div>
      
     
    
       
      
      <VideoPlayer />
      <Options>
      <Notifications/>
      </Options>
     
      
    </div>
  );
}

export default App;
