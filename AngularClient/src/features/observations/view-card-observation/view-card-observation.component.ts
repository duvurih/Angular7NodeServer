import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router, CanActivate } from '@angular/router';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, Validators  } from '@angular/forms';

// importing components
import { AddobservationComponent } from './../addobservation/addobservation.component';

// importing services
import { ObservationsService } from './../observations.service';
import { SpinnerService } from './../../../app/spinner/spinner.service';

// importing models
import { ObservationModel } from './../models/observation.model';
import { UserModel } from './../models/user.model';

@Component({
  selector: 'app-view-card-observation',
  templateUrl: './view-card-observation.component.html',
  styleUrls: ['./view-card-observation.component.css']
})
export class ViewCardObservationComponent implements OnInit {
  // declarations
  observationItem: ObservationModel = new ObservationModel();
  observationList: ObservationModel[] = [];
  user: UserModel = new UserModel();
  dataSaved = false;
  employeeID: String = 'EMP2018004';
  dynamicCols: Number = 3;
  obsGroup: FormGroup;
  dialogRef: MatDialogRef<AddobservationComponent>;
    // injecting services
  constructor(
      private router: Router,
      public dialog: MatDialog,
      private observation: ObservationsService,
      private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.obsGroup = new FormGroup({
      employeeID: new FormControl(this.employeeID, [Validators.required])
    });
    this.getObservations(this.employeeID);
    // this.dynamicCols = (window.innerWidth <= 400) ? 1 : 6;
    if (window.innerWidth <= 400) {
      this.dynamicCols = 1;
    } else if (window.innerWidth <= 768) {
      this.dynamicCols = 1;
    } else {
      this.dynamicCols = 2;
    }
  }

  // public methods
  getObservations(userId: String) {
    this.spinnerService.showSpinner();
    this.observation.getObservations(userId).subscribe((data: any) => {
        this.user = data;
        console.log('user');
        console.log(this.user);
        this.observationList = data.observataions;
        // console.log(data);
        this.spinnerService.hideSpinner();
    });
  }

  addObservation() {
    if (this.employeeID !== '') {
        // let dialogRef = this.dialog.open(AddobservationComponent, {
        //     width: '600px',
        //     data: { employeeId: this.employeeID }
        //   });

        // dialogRef.afterClosed().subscribe(result => {
        // this.getObservations(this.employeeID);
        // });
        // this.router.navigate(['addobservation']);
        this.router.navigateByUrl('observation/addobservation/' + this.employeeID);
    }
  }

  onResize(event) {
    // this.dynamicCols = (event.target.innerWidth <= 400) ? 1 : 3;
    if (event.target.innerWidth <= 400) {
      this.dynamicCols = 1;
    } else if (event.target.innerWidth <= 768) {
      this.dynamicCols = 1;
    } else {
      this.dynamicCols = 2;
    }
  }
}
