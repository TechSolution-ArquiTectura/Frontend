import { AvailableFilm } from './available-films';

export interface Showtime{
    id?: number;
    availableFilm: AvailableFilm;
    playDate?: string;
    playtime?: string;
    capacity?: number;
    unitPrice?: number;
}

