/**
 *    巡检员
 */

import {Coordinate} from "../../../../wap/src/app/domain/coordinate.domain";
import {PipelinePoint} from "./pipelinePoint.domain";

export class WebPosi  {
    left:number;
    top:number;
    constructor(left,top){
        this.left=left;
        this.top=top;
    }
}
