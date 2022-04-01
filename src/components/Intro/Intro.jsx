import React from "react";
import { Link } from "react-router-dom";
import helmet from "../../assets/images/helmet.svg";
import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <section className="intro__container">
        <h1 className="intro__title">
          {"<space"}
          <img className="intro__logo" src={helmet} alt="" />
          {"bar/>"}
        </h1>
        <p className="intro__blurb">
          Text about the game: Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nam obcaecati nihil beatae, ducimus sequi ipsam
          dolorem natus, corporis ex ratione illum ab accusamus asperiores
          nostrum quidem vero, perspiciatis est dolores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iusto, veniam beatae provident
          nulla nobis atque incidunt rem commodi officiis fuga, ipsum libero a,
          voluptatum nemo quas ut assumenda esse. Voluptatem.
        </p>
        <Link to="/discover" className="intro__enter">
          GET STARTED
        </Link>
      </section>
    </section>
  );
};

export default Intro;
