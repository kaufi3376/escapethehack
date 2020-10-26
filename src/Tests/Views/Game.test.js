import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Game from "../../Views/Game"


describe("<Game/>", () => {
    let wrapper;
    it("should render Costumtimer", () => {
      wrapper = shallow(<Game />);
      const timer = wrapper.find("Costumtimer")

      expect(timer).toHaveLength(1);
       
      });


    it("should render Steps", () => {
        wrapper = shallow(<Game />);
        const steps = wrapper.find("Steps")
  
        expect(steps).toHaveLength(1);
         
    });

    it("should render riddles", () => {
          wrapper = shallow(<Game />);
          const stepscontent = wrapper.find(".steps-content")

          expect(stepscontent).toHaveLength(1);
           
    });

    it("should render buttons for steps action", () => {
      wrapper = shallow(<Game />);
      const stepsaction = wrapper.find(".steps-action")

      expect(stepsaction).toHaveLength(1);
       
    });






    
  });
  