import { Component, OnInit } from '@angular/core';
import {Station} from "./station.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  stations: Station[];

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.onButtonClicked();
  }

  onButtonClicked() {
    this.http.get<Station[]>(
      'https://danepubliczne.imgw.pl/api/data/synop'
    ).subscribe((data: Station[]) => {
      console.log(data);
      this.stations = data;
    });
  }

}
