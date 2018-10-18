import {PatrolPlan} from "./patrol-plan.domain";
import {Coordinate} from "./Coordinate.domain";

export class PatrolWorkorder {
    patrolPlan: PatrolPlan;
    trail: Coordinate[];
}
