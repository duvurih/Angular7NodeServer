import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  spinnerVisible = false;

  showSpinner() {
    this.spinnerVisible = true;
  }

  hideSpinner() {
    this.spinnerVisible = false;
  }

  getstatus() {
    return this.spinnerVisible;
  }
}
