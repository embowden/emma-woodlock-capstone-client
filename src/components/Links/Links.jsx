import axios from "axios";
import React, { useEffect, useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
// import "./links.scss";

const Links = ({ mode, ids }) => {
  const [resources, setResources] = useState(null);

  //AXIOS CALL FOR DISCOVER MODE
  const getResources = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mdn/links", {
        id: ids,
      });
      setResources(response.data);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //AXIOS CALL FOR DEVELOP MODE (NEED TO BUILD)

  useEffect(() => {
    getResources();
  }, []);

  return (
    <>
      {!resources ? null : (
        <section className="links">
          <div className="links__container">
            <h3 className="links__header">Check out the resources below!</h3>
            <ul className="links__list">
              {resources.map((object) => {
                return (
                  <LinkItem
                    key={object.id}
                    link={object.link}
                    title={object.title}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Links;