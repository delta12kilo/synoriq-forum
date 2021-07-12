export class Comments {
   
    question: string
    user: string
    date: string
    tag: string

    constructor( question: string, user: string, date: string, tag: string) {
        
        this.question = question;
        this.user = user;
        this.date = date;
        this.tag = tag;
    }
}