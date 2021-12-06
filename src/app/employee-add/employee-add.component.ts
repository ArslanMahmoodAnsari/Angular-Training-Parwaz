import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  public _model: any = {
    address: {}
  };
  @Output() private onHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  public onCancel(): void {
    this._model = {};
    this.onHide.emit(false);
  }

  public submit(): void {
    if (this.validate()) {
      let self = this;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
      };
      this.http.post("https://jsonplaceholder.typicode.com/users", this._model, httpOptions)
        .subscribe((res: any) => {
          self.onCancel();
        });

    }
  }

  private reset(): void {
    this._model = {};
  }

  private validate(): boolean {
    let status: boolean = true;
    if (typeof (this._model.id) === "undefined") {
      alert('Id is Blank');
      status = false;
    }
    else if (typeof (this._model.name) === "undefined") {
      alert('Name is Blank');
      status = false;
    }
    else if (typeof (this._model.email) === "undefined") {
      alert('Email is Blank');
      status = false;
    }
    else if (typeof (this._model.phone) === "undefined") {
      alert('Phone is Blank');
      status = false;
    }
    else if (typeof (this._model.address.city) === "undefined") {
      alert('City is Blank');
      status = false;
    }
    else if (typeof (this._model.address.street) === "undefined") {
      alert('Street is Blank');
      status = false;
    }

    return status;
  }

  ngOnInit(): void {
  }

}
