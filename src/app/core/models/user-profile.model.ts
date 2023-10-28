import { BusinessType } from './cineclub.model';

export interface Gender {
    id?: number;
    name: string;
}

export interface User{
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
  id?: any,
  name?: string;
  socialReason?: string;
  ruc?: string;
  phone?: string;
  email?: string;
  logoSrc?: string;
  bannerSrc?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  address?: string;
  referenceAddress?: string;
  owner?: any;
  businessType?: BusinessType;
  rating?: any;
  commentsCount?: number;
  user?: User;
  businessTypes?: BusinessType;
}

