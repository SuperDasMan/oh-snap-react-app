import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // First Test
  it('renders', () => {
    render(<Nav />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
