import { Showtime } from "./showtime.model";
import { User } from "./users.model";


export interface Ticket {
    id?: number;
    user: User;
    showtime: {
        id: number,
    };
    numberSeats?: number;
    paymentToken?: string;
    totalPrice?: number;
}
