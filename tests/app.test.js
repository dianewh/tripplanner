import React from "react";
import App from "../client/src/components/App.jsx";

describe('App', () => {
  const wrapper = shallow(<App/>);
  
  it('should render the component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
});