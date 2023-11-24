import { Business } from "./cineclub.model";
import { Film } from "./film.model";

export interface AvailableFilm{
    id: number;
    business: Business,
    film: Film,
    customNotice: string,
    isAvailable: any,
    promotion: any,
}

