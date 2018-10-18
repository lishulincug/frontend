import {BaseService} from "../../../core/base.service";
import {Pipeline} from "../../../domain/pipeline.domain";
import {Response} from "../../../domain/response.domain";

export class PatrollerMapService extends BaseService {

    private path: string = "patroller/";

    getPatrollers(pageSize = 1000): Promise<Response> {
        return this.get(this.path + 'list?' + 'pageSize=' + pageSize);
        // return Promise.resolve({
        //     "success": true,
        //     "data": data:[
        //         {
        //             id: 2,
        //             loginName: '耳机',
        //             realName: '郝宇',
        //             mobile: 12345678954,
        //             password: 456,
        //             role: {id: 2, name: '巡检员'},
        //             coordinate: {
        //                 longitude: '106.435516',
        //                 latitude: '29.830085'
        //             },
        //             locationTime: new Date()
        //         },
        //         {
        //             id: 32,
        //             loginName: '耳机法师',
        //             realName: '大王',
        //             mobile: 123456328954,
        //             password: 456,
        //             role: {id: 2, name: '巡检员'},
        //             coordinate: {
        //                 longitude: '106.435916',
        //                 latitude: '29.830859'
        //             },
        //             locationTime: new Date()
        //         },
        //     ],
        //     "msg": "success"
        // });
    }
}
