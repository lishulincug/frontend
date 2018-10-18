import {User} from "./user.domain";
import {WorkOrderFeedback} from "./workOrderFeedback.domain";

export class WorkOrder {
    id: string;
    status: string;
    feedback: WorkOrderFeedback[];
    executor: User;
    assignAt: Date;
    creator: User;
    createAt: Date;
    finishAt: Date;
}
