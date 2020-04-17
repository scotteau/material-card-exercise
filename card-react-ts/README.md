# React Material Card Exercise - Typescript

[live link](https://card-react-ts.scotteau.now.sh/)


## Card.tsx
```typescript
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
```

##index.ts
```typescript
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";

const cardData = {
  header: "Shrimp and Chorizo Paella",
  subhead: "September 14, 2016",
  desc:
    "The impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  content: [
    "Method:",
    "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
    "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
    "Set aside off of the heat to let rest for 10 minutes, and then serve.",
  ],
  liked: true,
};

ReactDOM.render(
  <div style={{ display: "flex" }}>
    <Card data={cardData} theme={"dark"} />
    <Card data={cardData} />
  </div>,
  document.querySelector("#root")
);

```