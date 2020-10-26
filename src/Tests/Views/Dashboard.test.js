import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import Dashboard from "../../Views/Dashboard"
import { Card } from 'antd';


describe("<Dashboard/>", () => {
  let wrapper
  it("should render Card", () => {
    wrapper = shallow(<Dashboard />);
    const cards = wrapper.find("Card")

    expect(cards).toHaveLength(1);
  });
   
  });
  