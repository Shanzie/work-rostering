import React from 'react';
import { render, screen } from '@testing-library/react';
import AnotherComponent from '../components/Login.js';

describe('AnotherComponent', () => {
  it('displays the correct content', () => {
    render(<AnotherComponent />);
    expect(screen.getByText('Some content')).toBeInTheDocument();
  });

});
