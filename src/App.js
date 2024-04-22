import IntroVideo from "./component/IntroVideo";
import Section from "./component/Section";
import Footer from "./component/Footer";
import freshTopiciImg from "./assets/academy.png";
import freshTopici2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiwalaImg from "./assets/image3.png";
import "./styles/mediaQuery.scss"

import data from "./data/data.json";
import "./styles/app.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";

const yellow = "#fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  return (
    <>
      <IntroVideo />
      {/* freshTopic 1 */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgsrc={freshTopiciImg}
        bgColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnColor={pink}
        btnBgColor={yellow}
      />
      {/* freshTopic 2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgsrc={freshTopici2Img}
        bgColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnColor={pink}
        btnBgColor={yellow}
      />
      {/* tedTallks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgsrc={tedTalksImg}
        bgColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnColor={yellow}
        btnBgColor={pink}
      />
      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgsrc={franchiseImg}
        bgColor={white}
        headingColor={pink}
        textColor={brown}
        btnColor={brown}
        btnBgColor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        btnTxt={map.btn}
        imgsrc={mapImg}
        bgColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasBtn={false}
        btnColor={yellow}
        btnBgColor={brown}
      />
      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgsrc={coursesImg}
        imgSize={"30%"}
        bgColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnColor={yellow}
        btnBgColor={pink}
      />
      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgsrc={albumImg}
        bgColor={white}
        headingColor={pink}
        textColor={brown}
        btnColor={yellow}
        btnBgColor={brown}
      />
      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgsrc={baratImg}
        bgColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnColor={pink}
        btnBgColor={yellow}
      />
      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgsrc={chaiwalaImg}
        bgColor={white}
        headingColor={pink}
        textColor={brown}
        btnColor={yellow}
        btnBgColor={brown}
      />
      <Footer />
    </>
  );
}

export default App;
