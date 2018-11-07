import { ObservationModel } from './observation.model';

export class UserModel {
    public userId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public observations: ObservationModel[];

    constructor() {
        this.userId = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        // this.observations = null;
    }
}
