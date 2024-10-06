
import React from "react";

interface CardProps { //que cosa recibe card
  body: string;
}


function Card({ body }: CardProps) { //recibe el prop body
  return (
    <div className="card">
      <div className="card-body">{body}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody({ title, text }: CardBodyProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text ||
            "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;

