import React, { useEffect, useRef, useState } from "react";
import media from "./media.jpg";

interface CardData {
  header: string;
  subhead: string;
  desc: string;
  content: string[];
  liked: boolean;
}

interface Props {
  data: CardData;
  theme?: string;
}

const Card = ({ data, theme = "light" }: Props) => {
  const { header, subhead, desc, content, liked } = data;
  const renderContent = () => {
    return content.map((p, index) => <p key={index}>{p}</p>);
  };

  const [shouldCollapse, setShouldCollapse] = useState(true);
  const [hearted, setHearted] = useState(liked);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  }, []);

  return (
    <div className={`card ${theme === "dark" ? "card--dark" : "card--light"}`}>
      <div className="card__title">
        <div className="card__title__thumbnail">R</div>
        <div className="card__title__headers">
          <span className="header">{header}</span>
          <span className="subhead">{subhead}</span>
        </div>
      </div>
      <div className="card__media">
        <img src={media} alt="paella" />
      </div>
      <div className="card__body">
        <p className="card__body__desc">{desc}</p>
      </div>
      <div className="card__actions">
        <div className="card__actions__icons">
          <span
            className={`material-icons favorite ${hearted ? "hearted" : ""}`}
            onClick={() => {
              setHearted(!hearted);
            }}
          >
            favorite
          </span>
          <span className="material-icons">share</span>
        </div>
        <div className="card__actions__buttons">
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
        ref={contentRef}
        style={{ maxHeight: shouldCollapse ? "0px" : `${contentHeight}px` }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Card;
