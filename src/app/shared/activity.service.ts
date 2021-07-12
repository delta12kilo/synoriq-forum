import { Injectable } from "@angular/core";
import { Comments } from "../comments";


@Injectable()
export class ActivityService {
    private activity: Comments[] = [
        new Comments('How to run server in Angular?','Deepak','4/2/2021','angular'),
        new Comments('what is React?','Jasroop','3/2/2021','React'),
        new Comments('How to print line in python','Karan','2/2/2021','Python'),
    ]


    constructor() {}

    addActivity(comment: Comments) {
        this.activity.push(comment);
    }

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