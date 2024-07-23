import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import { MainProps } from './Main.props';
import { People } from '../../serviсes';
import { ThemeProvider } from '@context/index';

const mockData = [
  { name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' },
  { name: 'C-3PO', url: 'https://swapi.dev/api/people/2/' },
  { name: 'R2-D2', url: 'https://swapi.dev/api/people/3/' },
  { name: 'Darth Vader', url: 'https://swapi.dev/api/people/4/' },
];

const mockProps: MainProps = {
  searchData: mockData as People[],
  loading: false,
  currentPage: 1,
  totalPages: 1,
  handlePage: vi.fn(),
};

describe('Main Component', () => {
  test('renders the correct number of cards', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Main {...mockProps} />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockData.length);
  });

  test('shows loading message when loading', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Main {...mockProps} loading={true} />
        </ThemeProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows no data message when searchData is empty', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Main {...mockProps} searchData={[]} />
        </ThemeProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('No available data')).toBeInTheDocument();
  });
});
