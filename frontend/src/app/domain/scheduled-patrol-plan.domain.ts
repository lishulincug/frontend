import {PatrolPlan} from "./patrol-plan.domain";
import {Schedule} from "./schedule.domain";

export class ScheduledPatrolPlan extends PatrolPlan {

    schedule: Schedule;
}
