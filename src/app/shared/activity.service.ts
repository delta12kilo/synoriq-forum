import { Injectable } from "@angular/core";
import { Comments } from "../comments";


@Injectable()
export class ActivityService {
    public activity: Comments[] = [
        new Comments('0','How to run server in Angular?','Deepak','4/2/2021','angular'),
        new Comments('1','what is React?','Jasroop','3/2/2021','React'),
        new Comments('2','How to print line in python','Karan','2/2/2021','Python'),
    ]

    constructor() {}


    getActivity(){
        return this.activity.slice();
    }


    getActivities(idx: number) {
        
        return this.activity[idx];

    }

    getActivityLength() {
        return this.activity.length;
    }


    
}