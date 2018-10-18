import {User} from "./user.domain";

export class LoginLog {

    id: number;
    user: User;
    time: Date;
    location: string;
    ip:string;
    action:string;

}
