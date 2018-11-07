import { Component, Inject, OnInit, Input, Optional } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ObservationsService } from './../observations.service';
import { ObservationModel } from './../models/observation.model';

@Component({
  selector: 'app-addobservation',
  templateUrl: './addobservation.component.html',
  styleUrls: ['./addobservation.component.css']
})
export class AddobservationComponent implements OnInit {

  // declearing variables
  observationItem: ObservationModel = new ObservationModel();
  pageSaveClicked = false;
  pageHasError = false;
  errorMessage: string;
  observationForm: FormGroup;
  minDiscussionStartDate: Date;
  maxDiscussionEndDate: Date;

  // injecting services
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private observation: ObservationsService,
    @Optional() public dialogRef: MatDialogRef<AddobservationComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.setFormControls();
    if (this.data !== null) {
      this.observationItem.recordedBy = this.data.employeeId;
    } else {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.observationItem.recordedBy = params['id'];
      });
    }
  }

  setFormControls() {
    this.observationForm = new FormGroup({
      discussion: new FormControl(this.observationItem.discussion, [Validators.required, Validators.maxLength(50)]),
      discussionDate: new FormControl(this.observationItem.discussionDate, [Validators.required]),
      discussionLocation: new FormControl(this.observationItem.discussionLocation, [Validators.required, Validators.maxLength(50)]),
      discussionWith: new FormControl(this.observationItem.discussionWith, [Validators.required, Validators.maxLength(50)]),
      subject: new FormControl(this.observationItem.discussion, [Validators.required, Validators.maxLength(255)]),
      outcome: new FormControl(this.observationItem.discussion, [Validators.required, Validators.maxLength(255)])
    });
  }

  saveObservation() {
    this.pageHasError = false;
    this.pageSaveClicked = true;
    this.errorMessage = '';
    if (this.observationForm.valid) {
      // this.observationItem.recordedBy = this.data.employeeId;
      console.log(this.observationItem);
      this.observation.saveObservation(this.observationItem.recordedBy, this.observationItem).subscribe((data) => {
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    if (this.data !== null) {
      this.dialogRef.close();
      console.log(this.data);
    } else {
      this.router.navigateByUrl('observation/dashboard');
    }
  }
}
