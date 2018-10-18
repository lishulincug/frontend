import {User} from "./user.domain";

export class PatrolPlan {
    id: string;
    name: string;
    enabled: Boolean;
    description: string;
    creator: User;
    createAt: Date;
}
