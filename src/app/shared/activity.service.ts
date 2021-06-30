import { Injectable } from "@angular/core";
import { Comments } from "../comments";


@Injectable()
export class ActivityService {
    public activity: Comments[] = [
        new Comments('0','How to run server in Angular?','Deepak','2/2/2021','angular'),
        new Comments('1','what is Angular?','Jasroop','3/2/2021','angular'),
        new Comments('2','How to run server in Angular?','Deepak','2/2/2021','angular'),
    ]

    constructor() {}


    getActivity(){
        return this.activity.slice();
    }


    getActivities(idx: number) {
        
        return this.activity[idx];

    }


    
}