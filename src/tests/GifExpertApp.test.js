import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('probat GifExpertApp', () => {
    test('probar que <GifExpeertApp /> se muestre ', () => {
        const titu = "GifExpertApp";
        const wrapper = shallow(<GifExpertApp />)
        const text = wrapper.find("h2").text().trim();
        expect( titu ).toBe(text)
        console.log(text);
    })
    
})
