import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Costumsider from "../../Component/layout/Costumsider"


describe("<Costumsider/>", () => {
    let wrapper
    it("check if sider exists  ", () => {
      wrapper = shallow(<Costumsider />);
      const mycomp = wrapper.find("Sider");
  
      expect(mycomp.exists()).toEqual(true);
    });

    it("check if sider exists  ", () => {
      wrapper = shallow(<Costumsider />);
      const mycomp = wrapper.find("Menu");
  
      expect(mycomp.exists()).toEqual(true);
    });

    it("check if  icon on side exist  ", () => {
      wrapper = shallow(<Costumsider />);
      const mycomp = wrapper.find("Modal");
  
      expect(mycomp).toHaveLength(1);
    });

  });
  