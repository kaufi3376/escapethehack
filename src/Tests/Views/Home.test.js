import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Home from "../../Views/Home"


describe("<Home/>", () => {
    let wrapper;
  
    it("should render a button", () => {
      wrapper = shallow(<Home />);
      const button = wrapper.find("Button");
  
      expect(button).toHaveLength(1);
    });

    it("should render an Input field", () => {
      wrapper = shallow(<Home />);
      const input = wrapper.find("Input");
  
      expect(input).toHaveLength(1);
    });

    it("should render an image", () => {
      wrapper = shallow(<Home />);
      const img = wrapper.find("img");
  
      expect(img).toHaveLength(1);
    });

    it("should render an h2", () => {
      wrapper = shallow(<Home />);
      const header = wrapper.find("h2");
  
      expect(header.text()).toBe("Bewahre die Menschheit vor einer großen Katastrophe ! Das Internet steht kurz davor gehackt zu werden. Kannst du es schaffen und die Hacker überlisten ? ")
    });

    it("should render an p", () => {
      wrapper = shallow(<Home />);
      const header = wrapper.find("p");
  
      expect(header.text()).toBe("Um zu starten gib den Startcode hier ein: ")
    });


  
  
   
  });
  
