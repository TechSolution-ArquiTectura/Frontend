import { BusinessType } from './cineclub.model';

export interface Gender {
    id?: number;
    name: string;
}

export interface User {
    id?: any;
    name?: string;
    lastname?: string;
    Gender_id?: Gender;
    numberDni?: string;
    birthdate?: string;
    imageSrc?: string;
    phone?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    gender?: string[];
    typeUser?: string[];
}

export interface Business {
  id?: number,
  name?: string;
  socialReason?: string;
  ruc?: string;
  phone?: string;
  logoSrc?: string;
  bannerSrc?: string;
  description?: string;
  address?: string;
  startTime?: string;
  endTime?: string;
  rating?: any;
  commentsCount?: number;
  businessTypes?: BusinessType;
  user?: User;
}

