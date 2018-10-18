
import {BaseService} from "../../../../core/base.service";

export class FeedbackAddeditService extends BaseService {

    // public getImg(filename: string) {
    //     let condition = "imgurl=" + filename;
    //     return this.getimg('upload/getimg' + condition);
    // }
    private path: String = 'feedback';

    public postsave(data: any): Promise<any> {
        return this.post(this.path + '/save', data);
    }

    public changewokeorderstate(data: any): Promise<any> {
        return this.post(this.path + '/changewokeorderstate', data);
    }

    public getone(id: number): Promise<any> {
        return this.get(this.path + '/' + id);
    }
}

