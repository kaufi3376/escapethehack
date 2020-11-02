import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Game from "../../Views/Game"


describe("<Game/>", () => {
    let wrapper;
  

    it("should render buttons for steps action", () => {
      wrapper = shallow(<Game />);
      const stepsaction = wrapper.find("Prestory")

      expect(stepsaction.exists()).toBe(true);
       
    });






    
  });
  