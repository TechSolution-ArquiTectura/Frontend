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
  reference_address: string;
  Owner_id: number;
  BusinessType_id: any;
  rating: any;
  commentsCount: number;
}
