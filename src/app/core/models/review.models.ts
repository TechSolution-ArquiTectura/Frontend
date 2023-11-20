import { User } from "./users.model";
import { Business } from "./users.model";

export interface Review{
    id?: any;
    comment: string;
    rating: number;
    user: User
}

export interface ReviewCineclub{
    id?: any;
    comment: string;
    rating: number;
    user: User;
    business: Business;
}
