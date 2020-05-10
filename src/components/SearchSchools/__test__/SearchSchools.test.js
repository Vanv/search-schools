import React from 'react';
import ReactDOM from 'react-dom';
import SearchSchools from './../SearchSchools';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

it("renders searchschools correctly", () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchSchools />, div);
})

it("matches snapshot", () => {
  const tree = renderer.create(<SearchSchools />).toJSON();
  expect(tree).toMatchSnapshot();
})
