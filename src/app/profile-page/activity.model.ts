

export class Activity {
    public id: string
    public activity: string
    public date: string


    constructor(id: string, activity: string, date: string) {
        this.id = id,
        this.activity = activity,
        this.date = date
    }
}