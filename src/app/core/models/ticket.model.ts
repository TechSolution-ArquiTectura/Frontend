import { Showtime } from "./showtime.model";
import { User } from "./user-profile.model";


export interface Ticket {
    id?: number;
    customer?: User;
    showtime?: Showtime;
    numberSeats?: number;
    totalPrice?: number;
}