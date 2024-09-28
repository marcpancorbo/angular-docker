import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../user";
import {take} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  apiService: ApiService = inject(ApiService);
  $data: WritableSignal<User[]> = signal([]);


  ngOnInit() {
    this.apiService.getData().pipe(take(1)).subscribe((data: User[]) => {
      this.$data.set(data);
    })
  }
}
