import Link from "next/link";
import "./logos.scss";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Logos = ({ data }) => {
  return (
    <div className="mainLogos">
      <div className="containerLogos">
        {data.slices[2].items.map((logo, i) => {
          return (
            <PrismicNextLink
              className="containerLogos_image"
              key={i}
              field={logo.link}
            >
              <PrismicNextImage field={logo.logo} alt="" />
            </PrismicNextLink>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
