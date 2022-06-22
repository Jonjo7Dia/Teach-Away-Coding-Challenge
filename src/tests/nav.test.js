import { render as rtlRender} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import Nav from "../components/nav/Nav";
import { act } from "react-dom/test-utils";
import ViewResults from "../components/body/ViewResults";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("navbar", () => {
  test("ensure that all nav bar options are present", () => {
    const { container } = render(<Nav />);
    expect(container.getElementsByClassName("dropdown").length).toBe(3);
  });
});
describe("navbar", () => {
  test("ensure that all nav bar options are present", () => {
    const { container } = render(<Nav />);
    expect(container.getElementsByClassName("virality").length).toBe(1);
  });
});

//test if state updates on drop down list clicks
//we will look for new loading items as this shows that no error has occured on calling the new data
describe("request new data", () => {
  test("ensure that on click new data is being shown", () => {
    const { container } = render(<Nav />);

    const clickableItems = container.getElementsByClassName("dropdownListItem");
    //first expect there to be 11 items
    expect(clickableItems.length).toBe(11);
    for(let x = 0; x < 11; x ++){
        act(() => {
            clickableItems[x].click();
          });   
      const { container } = render(<ViewResults />);
      expect(container.getElementsByClassName("loadingMedia").length).toBe(60);
    }
    
  });
});
