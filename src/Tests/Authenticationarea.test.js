import React from "react";
import { shallow } from "./EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Authenticationarea from "../Authentication/Authenticationarea"


describe("<Authenticationarea/>", () => {
      let wrapper

      it("should render an h1 for login", () => {
        wrapper = shallow(<Authenticationarea />);
        const header = wrapper.find("h1");
    
        expect(header.text()).toBe("Jetzt Einloggen !")
      });

      it("should render a form", () => {
        wrapper = shallow(<Authenticationarea />);
        const button = wrapper.find("Button")
        expect(button).toHaveLength(1);
      });

      it("should render a Button", () => {
        wrapper = shallow(<Authenticationarea />);
        const button = wrapper.find("Button")
        expect(button).toHaveLength(1);
      });




      it("simulates button clicks", () => {
        const wrapper = shallow(<Authenticationarea />);
        const link = wrapper.find(".registerlink");
    
        link.simulate("click");
    
        expect(wrapper.find("h1").text()).toBe("Jetzt Registrieren !");
      });

   
   
  });
  