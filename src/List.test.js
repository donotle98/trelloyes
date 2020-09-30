import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import List from "./List";
import store from "./store";

describe("here is the test for list", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<List cards={[]} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = TestRenderer.create(
      <List
        key={"1"}
        header={"First list"}
        cards={["a", "b", "e", "f", "g", "j", "l", "m"]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
