import { color } from "framer-motion";
import React from "react";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgsrc,
  imgSize = "70%",
  bgColor,
  headingColor,
  textColor,
  btnColor,
  btnBgColor,
}) => {
  return (
    <div className="section" style={{backgroundColor:bgColor}}>
      <div >
        <h3 style={{ color: headingColor }}>{h3}</h3>
        <p style={{ color: textColor }}>{text}</p>
        {hasBtn && (
          <button style={{ color: btnColor, backgroundColor: btnBgColor }}>
            {btnTxt}
          </button>
        )}
        <div>
          <img src={imgsrc} alt="imgsrc" style={{ width: imgSize }} />
        </div>
      </div>
    </div>
  );
};

export default Section;
