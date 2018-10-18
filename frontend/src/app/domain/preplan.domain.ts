import {Target} from "./target.domain";
import {AlarmType} from "./alarm-type.domain";
import {HandleStatus} from "./handle-status.domain";
import {User} from "./user.domain";

export class Preplan {
    id: any ;
    title: string ;
    content: string ;
    creator: User ;
    createAt: Date ;
    updater: User ;
    updateAt: Date ;
}
