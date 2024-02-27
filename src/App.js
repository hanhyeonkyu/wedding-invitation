import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ReactAudioPlayer from "react-audio-player";
import waltz from "./sounds/waltz.ogg";

const App = () => {
  return (
    <div className="App">
      <ReactAudioPlayer
        autoPlay
        loop
        controls
        src={waltz}
        style={{
          width: "100%",
          height: "20px",
          opacity: "0.1",
          position: "absolute",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/wedding-invitation" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
