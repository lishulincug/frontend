/**
 *    巡检员
 */

import {Coordinate} from "../../../../wap/src/app/domain/coordinate.domain";
import {PipelinePoint} from "./pipelinePoint.domain";

export class Cesspool  {
    id:string;
    serialNumber:string;
    coordinate:Coordinate=new Coordinate();
    vertexes:PipelinePoint[]=[];
    feature:string;
}
