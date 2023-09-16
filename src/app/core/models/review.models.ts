import { Person } from "./person.model";

export interface Review{
    id?: any;
    comment: string;
    rating: number;
    user: Person
}