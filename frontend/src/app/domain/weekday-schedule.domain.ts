import {Schedule} from "./schedule.domain";

export class WeekdaySchedule extends Schedule {
    weekday: number;

    getList() {
        let list = new Array();
        list.push("每周一");
        list.push("每周二");
        list.push("每周三");
        list.push("每周四");
        list.push("每周五");
        list.push("每周六");
        list.push("每周日");
        return list;
    }
}
