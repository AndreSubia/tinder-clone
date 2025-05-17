import { faker } from '@faker-js/faker';
import { Color, ColorName } from '@styles/colors';

export interface User {
  id: number;
  name: string;
  age: number;
  picture_url: string;
  bio?: string;
  distance?: number;
  interests?: string[];
  background?: {
    start: string;
    end: string;
  };
}

const generateUser = (index: number): User => ({
  id: index,
  name: faker.person.firstName('female'),
  age: faker.number.int({ min: 18, max: 35 }),
  picture_url:
    index === 0
      ? ''
      : `https://randomuser.me/api/portraits/women/${index + 10}.jpg`,
  bio: faker.person.bio(),
  distance: faker.number.int({ min: 1, max: 30 }),
  interests: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () =>
    faker.word.sample(),
  ),
});

export const generateUsers = (count = 1): User[] =>
  Array.from({ length: count }, (_, index) => generateUser(index));

export const users: User[] = [
  {
    id: 0,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://64.media.tumblr.com/6832071186f1bdf468ff7e24da974c13/b2da878a0350fb03-8b/s640x960/f828345da87cceb515fd916fbe040cfc9970d511.jpg',
    background: {
      start: Color.warmOrange,
      end: Color.coral,
    },
  },
  {
    id: 1,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://cdn.shopify.com/s/files/1/0263/7076/8986/files/istockphoto-1189891152-612x612_1024x1024.jpg?v=1659631916',
    background: {
      start: Color.pink,
      end: Color.black,
    },
  },
  {
    id: 2,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://cdn0-production-images-kly.akamaized.net/ygDKbBXSvk-pM3xty_r7OKmYSqY=/1360x766/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1622852/original/064821600_1497356278-HL_Daily_Pakistan.jpg',
    background: {
      start: Color.purple,
      end: Color.lightPurple,
    },
  },
  {
    id: 3,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://64.media.tumblr.com/6832071186f1bdf468ff7e24da974c13/b2da878a0350fb03-8b/s640x960/f828345da87cceb515fd916fbe040cfc9970d511.jpg',
    background: {
      start: Color.lightPurple,
      end: Color.warmOrange,
    },
  },
  {
    id: 4,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://cdn.shopify.com/s/files/1/0263/7076/8986/files/istockphoto-1189891152-612x612_1024x1024.jpg?v=1659631916',
    background: {
      start: Color.coral,
      end: Color.purple,
    },
  },
  {
    id: 5,
    name: faker.person.firstName('female'),
    age: faker.number.int({ min: 18, max: 35 }),
    picture_url:
      'https://cdn0-production-images-kly.akamaized.net/ygDKbBXSvk-pM3xty_r7OKmYSqY=/1360x766/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1622852/original/064821600_1497356278-HL_Daily_Pakistan.jpg',
    background: {
      start: Color.warmOrange,
      end: Color.black,
    },
  },
];
