import { Business } from "./cineclub.model";

export interface AvailableFilm{
    id: number;
    business: Business,
    film: any,
    customNotice: string,
    isAvailable: any,
    promotion: any,
}

