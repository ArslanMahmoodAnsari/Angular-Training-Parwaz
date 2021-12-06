import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public data: any = [];
  public showDetails: boolean = true;
  public showEmployee: boolean = false;
  public editEmployee: boolean = false;
  private _selectedData: any;
  private _deletedData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  addEmployee(): void {
    this.showDetails = false;
    this.showEmployee = true;
  }

  onHide(args: boolean): void {
    this.showDetails = !args;
    this.showEmployee = args;
    this.editEmployee = args;
    this.loadData();
  }

  private loadData(): void {
    let self = this;
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        self.data = res;
      });
  }
}
