import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentModel } from './student-data.model';

@Component({
  selector: 'app-student-data-edit',
  templateUrl: './student-data-edit.component.html',
  styleUrls: ['./student-data-edit.component.css']
})
export class StudentDataEditComponent implements OnInit {

  public formData : any;

  studentModelObj : StudentModel = new StudentModel();

  constructor(private fb: FormBuilder) {

  }

  myForm() {
    this.formData = this.fb.group({
    name : ['', Validators.required],
    fname : ['', Validators.required],
    number : ['', [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
    email : ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] 
    })
  }

  ngOnInit() {
    this.formData = new FormGroup({
      rollNo : new FormControl(""),
      name : new FormControl(""),
      fname : new FormControl(""),
      number : new FormControl(""),
      email : new FormControl(""),
      age : new FormControl(""),
      fees : new FormControl(""),
      class : new FormControl(""),
      address : new FormControl("")
    })
    this.myForm();
  }

  onClickSubmit(data: any) {
    console.log("RollNo : " + data.rollNo
    + "Name : " + data.name
    + "FName : " + data.fname
    + "Contact Number : " + data.number
    + "Email : " + data.email
    + "Age : " + data.age
    + "Fees : " + data.fees
    + "Class : " + data.class
    + "Address : " + data.address);
    
  }

}
