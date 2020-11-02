import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Footer from "../../Component/layout/Footer"


describe("<Footer/>", () => {
    let wrapper
    it("renders the footer text correctly", () => {
      wrapper = shallow(<Footer />);
      const mycomp = wrapper.find("div");
  
      expect(mycomp.text()).toBe("Ant Design ©2018 Created by Ant UED");
      });
   
  });
  