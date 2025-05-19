import { faker } from '@faker-js/faker';
import { Color } from '@styles/colors';
import type { CarouselItem, User } from 'src/types/data';

export const users: User[] = [
  {
    id: 0,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1588358641419-458f7616cbf2?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.warmOrange,
      end: Color.coral,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 1,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1612874470096-d93a610de87b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.pink,
      end: Color.black,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 2,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.black,
      end: Color.dust,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 3,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1612904370780-fbc1a5a4f46d?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.blue,
      end: Color.black,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 4,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1676904461752-24fb31a33d96?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.dust,
      end: Color.lightPurple,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 5,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1561277151-7e07fb9dd27f?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.black,
      end: Color.warmOrange,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
  {
    id: 6,
    name: faker.person.firstName('female'),
    lastName: faker.person.lastName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://images.unsplash.com/photo-1746564695185-0e7e673955bf?q=80&w=2384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    background: {
      start: Color.coral,
      end: Color.pink,
    },
    district: faker.location.city(),
    country: faker.location.country(),
    interests: ['Viajar', 'Leer', 'Pasarlo bien'],
    descriptions: ['Femme'],
  },
];

export const userProfile: User = {
  id: 1,
  name: faker.person.firstName('male'),
  lastName: faker.person.lastName('male'),
  age: faker.number.int({ min: 18, max: 35 }),
  picture_url: 'https://randomuser.me/api/portraits/men/4.jpg',
  background: {
    start: Color.black,
    end: Color.black,
  },
  district: faker.location.city(),
  country: faker.location.country(),
  interests: ['Viajar', 'Leer', 'Pasarlo bien'],
  descriptions: ['Femme'],
};

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === Number(id));
};

export const carouselData = (id: string): CarouselItem[] => {
  const user = getUserById(id);
  return [
    {
      id: '0',
      url: user?.picture_url || 'default',
      color: 'black',
    },
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1676904479879-2ef3ce54cdec?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'red',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'blue',
    },
    {
      id: '3',
      url: 'https://plus.unsplash.com/premium_photo-1669703777428-48a39ccfe8cb?q=80&w=3204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'green',
    },
  ];
};
