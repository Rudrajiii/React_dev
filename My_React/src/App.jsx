import React from "react";

export function App() {
  return (
    <React.Fragment>
      <GojoComponent />
      <GojoComponent />
      <GojoComponent />
      <GojoComponent />
      <GojoComponent />
    </React.Fragment>
  );
}

const GojoComponent = () => {
  const name = "Gojo Saturo";
  const rating = 9.9;
  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi, ab exercitationem quis vitae culpa quas fugit tenetur nesciunt cum!";
  const genre = (type) => type;
  const btn = document.querySelector(".btn");
  const alertMsg = (age) => {
    if (age >= 18) {
      alert("Yes you can watch!!");
    } else {
      alert("No you can't watch!!");
    }
  };
  return (
    <div className="Card-Wrapper">
      <div className="image">
        <img
          src="https://i.pinimg.com/originals/69/13/2d/69132d15b481cde201928683ea39c3ff.jpg"
          alt="Gojo"
          width="40%"
          height="40%"
        />
      </div>
      <div className="content">
        <h1>Series : Jujutsu Kaisen Season 2</h1>
        <h2>Name : {name}</h2>
        <h2>Rating : {rating} ⭐</h2>
        <p>{content}</p>
        <p>Genre : {genre("Action, Supernatural")}</p>
      </div>
      <button
        className="btn"
        onClick={() => {
          return alertMsg(20);
        }}
      >
        Check Age
      </button>
    </div>
  );
};
