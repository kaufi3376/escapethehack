import React from "react";
import { shallow } from "../EnzymeSetup";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import EscapeRoomDash from "../../Component/EscapeRoomDash"




beforeAll(()=>{

})


describe("<EscapeRoomDash/>", () => {

    let wrapper
    it("check if Card exists", () => {
        wrapper = shallow(<EscapeRoomDash />);
        const mycomp = wrapper.find("Card");
    
        expect(mycomp.exists()).toEqual(false);
      });

      it("check if edit exists", () => {
        wrapper = shallow(<EscapeRoomDash />);
        const mycomp = wrapper.find("EditTwoTone");
    
        expect(mycomp.exists()).toEqual(false);
      });

      it("check if  Popconfirm exists", () => {
        wrapper = shallow(<EscapeRoomDash />);
        const mycomp = wrapper.find("Popconfirm");
    
        expect(mycomp.exists()).toEqual(false);
      });

      it("check if  Popconfirm exists ", () => {
        wrapper = shallow(<EscapeRoomDash />);
        const mycomp = wrapper.find("DeleteTwoTone");
    
        expect(mycomp.exists()).toEqual(false);
      });

      it("check if PlayButton exists  ", () => {
        wrapper = shallow(<EscapeRoomDash />);
        const mycomp = wrapper.find("PlayCircleTwoTone");
    
        expect(mycomp.exists()).toEqual(false);
      });
   
  });
  