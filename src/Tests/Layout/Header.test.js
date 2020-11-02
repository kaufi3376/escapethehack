import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Header from "../../Component/layout/Header"


describe("<Header/>", () => {
 let wrapper
  it("check if Menu exists  ", () => {
    wrapper = shallow(<Header />);
    const mycomp = wrapper.find("Menu");

    expect(mycomp.exists()).toEqual(true);
  });

   
  });
  