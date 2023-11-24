//export interface CineClub {
  //id:       number;
  //title:    string;
  //subtitle: string;
  //points:   number;
  //image:    string;
//}
// New Models

export interface BusinessType{
  id?:       number;
  name?:    string;
}

export interface Business {
  id: any,
  name: string;
  socialReason: string;
  ruc: string;
  phone: string;
  logoSrc: string;
  bannerSrc: string;
  description: string;
  address: string;
  startTime: Date;
  endTime: Date;
  user: any;
  businessTypes: any;
  rating: any;
  commentsCount: number;
}
