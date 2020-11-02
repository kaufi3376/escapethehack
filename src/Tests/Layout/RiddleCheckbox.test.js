import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import RiddleCheckbox from "../../Component/layout/RiddleCheckbox"



describe("<RiddleCheckbox/>", () => {
  let wrapper
  let props


  it("check if Table exists  ", () => {
    props  = [{ name : "Erstes", difficulty : "einfach", id: "123"}]
    wrapper = shallow(<RiddleCheckbox arrayToPortrait={props} />)
    const mycomp = wrapper.find("Table");

    expect(mycomp.exists()).toEqual(true);
  });
   
  });
  