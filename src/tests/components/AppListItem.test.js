import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AppListItem from "../../components/AppListItem.js";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Applications List Item", () => {
    describe("displays with props", () => {
        it("renders with or without data", () => {
        act(() => {
            render(<AppListItem />, container);
        });
        expect(container.querySelector("p").textContent).toBe("");
        expect(container.querySelector("a").textContent).toBe("");
        expect(container.textContent).toContain("");

        act(() => {
            render(<AppListItem  key="10" cohortName="test_name" cohortType="test_type" link="/" 
                />, container);
        });
        expect(container.querySelector("p").textContent).toBe("test_name");
        expect(container.querySelector("a").textContent).toBe("test_type");
        expect(container.querySelector("a").attributes.getNamedItem('href').value).toBe("/");
        });
    });
});