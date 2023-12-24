import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '../components/CalendarPage.js';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('handles click event', () => {
    render(<MyComponent />);
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByText('Clicked')).toBeInTheDocument();
  });

});
