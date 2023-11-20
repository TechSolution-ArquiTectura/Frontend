import { Showtime } from "./showtime.model";
import { User } from "./users.model";


export interface Ticket {
    id?: number;
    customer?: User;
    showtime?: Showtime;
    numberSeats?: number;
    totalPrice?: number;
}
