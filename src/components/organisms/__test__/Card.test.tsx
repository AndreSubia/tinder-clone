import { faker } from '@faker-js/faker';
import { Color } from '@styles/colors';
import { act, render } from '@testing-library/react-native';
import { useSharedValue } from 'react-native-reanimated';
import type { User } from 'src/data/users';
import Card from '../Card/Card';

describe('Card Component', () => {
  const createFakeUser = (): User => ({
    id: 0,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url: faker.image.url(),
    background: {
      start: Color.warmOrange,
      end: Color.coral,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  });

  it('renders correctly with user data', async () => {
    const mockUser = createFakeUser();
    const currentIndex = useSharedValue(0);

    const renderResult = render(
      <Card
        user={mockUser}
        index={0}
        usersLength={1}
        currentIndex={currentIndex}
      />,
    );

    await act(async () => {});

    const { getByText } = renderResult;

    expect(getByText(mockUser.name)).toBeTruthy();
    expect(getByText(`${mockUser.lastName},`)).toBeTruthy();
    expect(getByText(`${mockUser.age}`)).toBeTruthy();
    expect(getByText(`${mockUser.district}, ${mockUser.country}`)).toBeTruthy();
  });
});
