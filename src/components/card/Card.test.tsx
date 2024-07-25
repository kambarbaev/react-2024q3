import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';
import { CardProps } from './Card.props';
import { getPersonIdFromUrl } from '@utils/getPersonIdFromUrl';
import { People } from '@services/index';
import { ThemeProvider } from '@context/index';

const mockPerson = {
  name: 'Luke Skywalker',
  url: 'https://swapi.dev/api/people/1/',
};

const mockCardProps: CardProps = {
  person: mockPerson as People,
  currentPage: 1,
  isOpen: false,
  onCardClick: vi.fn(),
};

describe('Card Component', () => {
  test('renders card data correctly', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card {...mockCardProps} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });

  test('check card is open and navigates correctly on card click', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card {...mockCardProps} isOpen={true} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const cardElement = screen.getByRole('listitem');
    fireEvent.click(cardElement);

    expect(mockCardProps.onCardClick).toHaveBeenCalledWith(getPersonIdFromUrl(mockPerson.url), true);
  });

  test('check card is closed and navigates correctly on card click', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card {...mockCardProps} isOpen={false} />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const cardElement = screen.getByRole('listitem');
    fireEvent.click(cardElement);

    expect(mockCardProps.onCardClick).toHaveBeenCalledWith(getPersonIdFromUrl(mockPerson.url), false);
  });
});
