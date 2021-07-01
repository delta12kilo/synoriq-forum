export class Comments {
    _id:string
    question: string
    user: string
    date: string
    tag: string

    constructor(_id: string, question: string, user: string, date: string, tag: string) {
        this._id = _id;
        this.question = question;
        this.user = user;
        this.date = date;
        this.tag = tag;
    }
}