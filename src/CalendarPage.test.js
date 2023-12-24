import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CalendarPage from './components/CalendarPage';

describe('CalendarPage', () => { 
  it('renders correctly', () => {
    render(<CalendarPage />);
    expect(screen.getByText('Book Your Shift')).toBeInTheDocument();
  });

  it('handles interactions correctly', () => {
    render(<CalendarPage />);

  });

});
