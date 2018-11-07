import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog } from '@angular/material';

// importing components
import { AddobservationComponent } from './../addobservation/addobservation.component';

// importing services
import { ObservationsService } from './../observations.service';
import { SpinnerService } from './../../../app/spinner/spinner.service';

// importing models
import { ObservationModel } from './../models/observation.model';
import { UserModel } from './../models/user.model';

@Component({
  selector: 'app-viewobservation',
  templateUrl: './viewobservation.component.html',
  styleUrls: ['./viewobservation.component.css']
})
export class ViewobservationComponent implements OnInit {

    // declarations
    observationItem: ObservationModel = new ObservationModel();
    observationList: ObservationModel[];
    user: UserModel = new UserModel();
    dataSaved = false;
    employeeID: String = 'EMP2018004';

    displayedColumns = ['id', 'discussion', 'discussionDate', 'discussionLocation', 'discussionWith', 'subject', 'outcome'];
    dataSource = new MatTableDataSource<ObservationModel>(this.observationList);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dialogRef: MatDialogRef<AddobservationComponent>;

    // injecting services
    constructor(
        public dialog: MatDialog,
        private observation: ObservationsService,
        private spinnerService: SpinnerService
    ) {

    }

    // initialiazations
    ngOnInit() {
        this.getObservations(this.employeeID);
    }

    // public methods
    getObservations(userId: String) {
        this.spinnerService.showSpinner();
        this.observation.getObservations(userId).subscribe((data: any) => {
            console.log(data);
            this.user = data;
            this.observationList = data.observataions;
            this.dataSource = new MatTableDataSource<ObservationModel>(this.observationList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(data);
            this.spinnerService.hideSpinner();
        });
    }

    addObservation() {
        if (this.employeeID !== '') {
            const dialogRef = this.dialog.open(AddobservationComponent, {
                width: '600px',
                data: { employeeId: this.employeeID }
              });

            dialogRef.afterClosed().subscribe(result => {
            this.getObservations(this.employeeID);
            });
        }
    }
}
