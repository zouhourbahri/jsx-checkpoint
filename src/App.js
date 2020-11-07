import './App.css';
import reactjsx from "./image/reactjsx.jpg";
import './style.css';
function App() {
  return (
    <>
      <div className="App">
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">REACT LOGO / APPLICATIONS</h1>
          <br />
          <img src={reactjsx} alt="" className="image positionLeft" />
          <br />
          <img src="./React-websites.png" alt="" className="image positionRight" />
        </div>
        <video width={500} height={300} controls>
          <source src="./video/react-for-beginners-what-is-jsx.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
