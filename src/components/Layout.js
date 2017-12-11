import React from "react";
import Navigation from "./sections/navigation";
import FullScreen from "./sections/fullScreen";
import Gallery from "./sections/gallery";
import Description from "./sections/description";
import SLider from "./sections/slider";
import Tab from "./sections/tabs";
import Footer from "./sections/footer";
export default class Layout extends React.Component {
  render() {
    const images = [
      {
        src: "./assets/images/full/DJI_0037.jpg",
        alt: "full bg 1",
        content: {
          heading: "full screen image",
          title: "roboto font used thoughout"
        }
      },
      {
        src: "./assets/images/full/Gleniff+Horseshoe,+Ireland.jpg",
        alt: "full bg 2"
      }
    ];
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <div id="fullpage">
          <section className="section active">
            <FullScreen data={images[0]} />
          </section>
          <section className="section fp-auto-height ">
            <Gallery />
            <Description />
            <SLider />
          </section>
          <section className="section">
            <FullScreen data={images[1]} />
          </section>
          <section className="section fp-auto-height">
            <Tab />
          </section>
          <div className="section fp-auto-height">
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
