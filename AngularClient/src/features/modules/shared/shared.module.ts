import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { SpinnerComponent } from './../../../app/spinner/spinner.component';
import { SpinnerService } from './../../../app/spinner/spinner.service';
import { DataContextService} from './../../../common/services/data-context.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    SpinnerService,
    DataContextService
  ],
  declarations: [
    // SpinnerComponent
  ],
  exports: [
    NgbModule
  ],
  entryComponents: [
    // SpinnerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,

      providers:
      [
        SpinnerService
      ]
    };
  }
}
