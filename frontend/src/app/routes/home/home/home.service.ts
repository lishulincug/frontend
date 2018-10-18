import {BaseService} from "../../../core/base.service";
import {Pipeline} from "../../../domain/pipeline.domain";
import {Alarm} from "../../../domain/alarm.domain";
import {Response} from "../../../domain/response.domain";
import {SensorPoint} from "../../../domain/sensorPoint.domain";

export class HomeService extends BaseService {
    private sensorPath: string = "pipeline/sensors";
    private alarmPath: string = "alarm";
    private faultPath: string = "fault";
    private pipelinePath: string = "pipeline";
    private sensorValuePath: string = "sensorValue";

    getSensorPoints(pageSize: number = 4): Promise<Response> {
        return this.get(this.sensorPath + '?' + 'pageSize=' + pageSize);
        // return Promise.resolve({
        //     'msg': '',
        //     'success': true,
        //     'data': [
        //         {
        //             id: 1,
        //             type: 'ys',
        //             startPoint: {
        //                 id: '13',
        //                 coordinate: {
        //                     longitude: '106.436116',
        //                     latitude: '29.830285'
        //                 }
        //             },
        //             endPoint: {
        //                 id: '14',
        //                 coordinate: {
        //                     longitude: '106.4212255',
        //                     latitude: '29.8214901'
        //                 }
        //             },
        //             StartElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             endElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             sensors: [
        //                 {id: 1, type: 'levelSensor', currentValue: '12cm', status: 'normal'},
        //                 {id: 2, type: 'flowSensor', currentValue: '1.1m/s', status: 'alarm'}
        //             ]
        //         },
        //         {
        //             id: 2,
        //             type: 'ws',
        //             startPoint: {
        //                 id: '11',
        //                 coordinate: {
        //                     longitude: '106.435516',
        //                     latitude: '29.830085'
        //                 }
        //             },
        //             endPoint: {
        //                 id: '12',
        //                 coordinate: {
        //                     longitude: '106.425716',
        //                     latitude: '29.830185'
        //                 }
        //             },
        //             StartElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             endElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             sensors: [
        //                 {id: 1, type: 'levelSensor', currentValue: '13cm', status: 'normal'},
        //                 {id: 2, type: 'flowSensor', currentValue: '0.2m/s', status: 'normal'}
        //             ]
        //         },
        //         {
        //             id: 3,
        //             type: 'ys',
        //             startPoint: {
        //                 id: '11',
        //                 coordinate: {
        //                     longitude: '106.415516',
        //                     latitude: '29.810085'
        //                 }
        //             },
        //             endPoint: {
        //                 id: '12',
        //                 coordinate: {
        //                     longitude: '106.435716',
        //                     latitude: '29.830185'
        //                 }
        //             },
        //             StartElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             endElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             sensors: [
        //                 {id: 1, type: 'levelSensor', currentValue: '13cm', status: 'normal'},
        //                 {id: 2, type: 'flowSensor', currentValue: '0.3m/s', status: 'normal'}
        //             ]
        //         },
        //         {
        //             id: 4,
        //             type: 'ps',
        //             startPoint: {
        //                 id: '11',
        //                 coordinate: {
        //                     longitude: '106.430516',
        //                     latitude: '29.825085'
        //                 }
        //             },
        //             endPoint: {
        //                 id: '12',
        //                 coordinate: {
        //                     longitude: '106.435716',
        //                     latitude: '29.830185'
        //                 }
        //             },
        //             StartElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             endElevations: {
        //                 top: '12',
        //                 bottom: '123'
        //             },
        //             sensors: [
        //                 {id: 1, type: 'levelSensor', currentValue: '15cm', status: 'abnormal'},
        //                 {id: 2, type: 'flowSensor', currentValue: '0.6m/s', status: 'normal'}
        //             ]
        //         }
        //     ]
        // })

    }

    getAlarmList(pageSize: number = 10): Promise<Response> {
        return this.get(this.alarmPath + '?pageSize=' + pageSize);

    }
    getAlarmData(): Promise<Response> {
        return this.get(this.faultPath +'/stat/data');
    }
    getAlarmType(): Promise<Response> {
        return this.get(this.faultPath +'/stat/type');
    }

    getPipelineMaterial(): Promise<Response> {
        return this.get(this.pipelinePath +'/stat/material');
    }

    getPipelineType(): Promise<Response> {
        return this.get(this.pipelinePath +'/stat/type');
    }

    getPipelineDiameter(): Promise<Response> {
        return this.get(this.pipelinePath +'/stat/diameter');
    }

    getHistoryData(id: string): Promise<Response> {
        return this.get(this.sensorValuePath + '/history?id=' + id);
    }
}
