import { Component } from "react";
import "./App.css";
import Imagelink from "./IMAGELINK/Imagelink";
import Clarifai from "clarifai";
import Logo from "./LOGO/Logo";
import Navigation from "./NAVIGATION/Navigation";
import Rank from "./Rank/Rank";
import Particles from "react-particles-js";
import FaceRe from "./FaceRec/FaceRe";

const app = new Clarifai.App({
  apiKey: "d3888b23d240493b8186821b1155659f",
});

const particlesoption = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  caculateFaceLoctions = (data) => {
    const clarifaiface =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  };

  onInputchange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.caculateFaceLoctions(response))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Particles className="particales" params={particlesoption} />
        <Navigation />
        <Logo />
        <Rank />
        <Imagelink
          onInputchange={this.onInputchange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRe imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
