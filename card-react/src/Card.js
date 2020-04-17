import React, { useEffect, useRef, useState } from "react";
import media from "./media.jpg";
import "./style.css";

const Card = ({ data, theme = "light" }) => {
  const { header, subhead, desc, content, liked } = data;
  const cardContentRef = useRef(null);
  const [shouldCollapse, setShouldCollapse] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const [hearted, setHearted] = useState(false);

  const createParagraphs = () => {
    return content.map((content, index) => <p key={index}>{content}</p>);
  };

  useEffect(() => {
    setContentHeight(cardContentRef.current.scrollHeight);
    setHearted(liked);
  }, []);

  const renderBody = () => {
    return (
        <div
            className={`card ${theme === "dark" ? "card--dark" : "card--light"}`}
        >
          <div className="card__title">
            <div className="card__title__thumbnail">R</div>
            <div className="card__title__headers">
              <span className="header">{header}</span>
              <span className="subhead">{subhead}</span>
            </div>
          </div>
          <div className="card__media">
            <img src={media} alt="paella"/>
          </div>
          <div className="card__body">
            <p className="card__body__desc">{desc}</p>
          </div>
          <div className="card__actions">
            <div className="card__actions__icons">
            <span
                className={`material-icons favorite ${hearted ? "hearted" : ""}`}
                onClick={() => setHearted(!hearted)}
            >
              favorite
            </span>
              <span className="material-icons share">share</span>
            </div>
            <div className={`card__actions__buttons`}>
            <span
                className={`material-icons ${shouldCollapse ? "collapse" : ""}`}
                onClick={() => setShouldCollapse(!shouldCollapse)}
            >
              expand_less
            </span>
            </div>
          </div>

          <div
              className="card__content"
              ref={cardContentRef}
              style={{maxHeight: shouldCollapse ? `0px` : `${contentHeight}px`}}
          >
            {createParagraphs()}
          </div>
        </div>
    );
  };

  return renderBody();
};

export default Card;
