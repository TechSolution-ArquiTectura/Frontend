import { Person } from "./person.model";
import { Business } from "./user-profile.model";

export interface Review{
    id?: any;
    comment: string;
    rating: number;
    user: Person
}

export interface ReviewCineclub{
    id?: any;
    comment: string;
    rating: number;
    user: Person;
    business: Business;
}