import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  title: string;
  name: string;
  lastName: string;
  email: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
  nameInChar: boolean = true;
  lastNameInChar: boolean = true;

  registerForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      genderType: new FormControl()
  })

  constructor(private _listService: ListService, private _dropDownService: DropDownService) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      email:'',
      genderType: ''
    }
    this.genderArray = this._dropDownService.getDropDown();
  }


  submit(values) {
    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      email:values.email,
      gender: values.gender
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
