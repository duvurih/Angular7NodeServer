import { UserModel } from './user.model';
export class ObservationModel {
    public id: number;
    public discussion: string;
    public discussionDate: Date;
    public discussionLocation: string;
    public discussionWith: UserModel;
    public subject: string;
    public outcome: string;
    public recordedBy: string;

    constructor() {
        this.id = 0;
        this.discussion = '';
        this.discussionDate = new Date();
        this.discussionLocation = '';
        this.discussionWith = null;
        this.subject = '';
        this.outcome = '';
        this.recordedBy = '';
    }
}
