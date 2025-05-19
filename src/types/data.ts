export interface User {
  id: number;
  name: string;
  lastName: string;
  age: number;
  picture_url: string;
  interests?: string[];
  descriptions?: string[];
  background?: {
    start: string;
    end: string;
  };
  district?: string;
  country?: string;
}

export type CarouselItem = {
  id: string;
  url: string;
  color?: string;
};
