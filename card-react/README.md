# React material card exercise

[live link](https://card-react.scotteau.now.sh/)


## Card.js
```javascript
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
```

## index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

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
    <Card data={cardData} />
    <Card data={cardData} theme={"dark"}/>
  </div>,
  document.querySelector("#root")
);

```