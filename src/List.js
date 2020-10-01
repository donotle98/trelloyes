import React from "react";
import Cards from "./Card";

export default function List(props) {
  return (
    <section className="List">
      <header>
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        ))}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
List.defaultProps = {
  onClickAdd: () => {},
};
