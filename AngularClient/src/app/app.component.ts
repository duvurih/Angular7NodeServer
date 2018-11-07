import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRouteSnapshot,
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DXCSample';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private spinnerService: SpinnerService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinnerService.showSpinner();
       setTimeout(() => { }, 1000);
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
      this.spinnerService.hideSpinner();
      }, 1000);
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.spinnerService.hideSpinner();
    }
    if (event instanceof NavigationError) {
      this.spinnerService.hideSpinner();
    }
  }
}
