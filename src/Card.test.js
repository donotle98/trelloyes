import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card";
import store from "./store";

describe("here is the test for cards", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Card />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <Card title={store.allCards.title} content={store.allCards.content} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
