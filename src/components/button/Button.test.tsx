import { render, screen } from '@testing-library/react';
import { Button } from '@components/index';

test('Button renders with correct text', () => {
  const handleClick = vi.fn();
  render(<Button text="Click me" onClick={handleClick} />);

  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});
