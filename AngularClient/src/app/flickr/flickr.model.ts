export class FlickerItem {
    title: String;
    link: String;
    media: String[];
    date_taken: String;
    description: String;
    published: String;
    author: String;
    author_id: String;
    tags: String;

    constructor() {
        this.title = '';
        this.link = '';
        this.media = null;
        this.date_taken = '';
        this.description = '';
        this.published = '';
        this.author = '';
        this.author_id = '';
        this.tags = '';
    }
}
