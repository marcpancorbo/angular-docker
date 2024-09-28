import {Component, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  $interval: WritableSignal<number> = signal(0);
  intervalSubscription: Subscription;


  ngOnInit() {
    const values = Array(1000).fill(0);
    this.intervalSubscription = interval(1000).subscribe((val) => {
      this.$interval.set(val);
      console.log(val);
    });


    // this.apiService.getData().pipe(take(1)).subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
