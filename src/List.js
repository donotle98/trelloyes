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
          <Cards key={card.id} title={card.title} content={card.content} />
        ))}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
