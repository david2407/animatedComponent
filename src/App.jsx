import "./App.css";
import MagicButton from "./components/magicButton";

function App() {
  return (
    <div id="magicButton">
      <MagicButton
        text="Discover more of our work"
        mainBorderColor="#646cff"
        effectBorderColor="#f3f"
        borderEffectDuration="2"
        textTransitionDuration="1"
        textFontSize="30"
      />
    </div>
  );
}

export default App;
