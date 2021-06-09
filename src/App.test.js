import { render, screen } from '@testing-library/react';
import App from './App';

test('renders im on develop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/IM ON DEVELOP/i);
  expect(linkElement).toBeInTheDocument();
});
