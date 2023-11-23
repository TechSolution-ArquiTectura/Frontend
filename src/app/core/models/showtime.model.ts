import { Film } from "./film.model";
import { Promotion } from "./promotion";
import { Business } from "./users.model";
import { AvailableFilm } from './available-films';

export interface Showtime{
    id?: number;
    availableFilm: AvailableFilm;
    playDate?: string;
    playtime?: string;
    capacity?: number;
    unitPrice?: number;
}

