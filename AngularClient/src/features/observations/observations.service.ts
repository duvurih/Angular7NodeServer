import { Injectable } from '@angular/core';

import { DataContextService } from './../../common/services/data-context.service';

import { ObservationModel } from './models/observation.model';


@Injectable({
  providedIn: 'root'
})
export class ObservationsService {

  constructor(private dataContext: DataContextService) {
  }

  getObservations(userId: String) {
      return this.dataContext.httpGet('users/' + userId + '/observations');
  }

  saveObservation(userId: String, observation: ObservationModel) {
      return this.dataContext.httpPost('users/' + userId + '/observations' , observation);
  }

}
