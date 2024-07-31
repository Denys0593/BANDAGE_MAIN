import { PrismicRichText } from "@prismicio/react";
import "./universe.scss";

const Universe = ({ data }) => {
  return (
    <div className="containerUniverse">
      {/* <img src="/couple.png" alt="couple" className="containerUniverse_left" /> */}
      <div className="containerUniverse_left">
        <img src="/couple.png" alt="couple" />
      </div>

      <div className="containerUniverse_right">
        <h3 className="containerUniverse_subtitle">
          {data.slices[3].primary.subtitle}
        </h3>
        <h2 className="containerUniverse_title">
          {data.slices[3].primary.title}
        </h2>
        <div className="containerUniverse_text">
          {data.slices[3].primary.description}
        </div>
        <div className="containerUniverse_buttons">
          {data.slices[3].items.map((button, index) => {
            return (
              <button key={index} className={button.classname}>
                {button.button_caption}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Universe;
