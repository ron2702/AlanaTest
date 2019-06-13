import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  myForm2: FormGroup;

  varName = this.activateRoute.snapshot.paramMap.get('name');
  varSurname = this.activateRoute.snapshot.paramMap.get('surname');
  varGender = this.activateRoute.snapshot.paramMap.get('gender');
  varBirthDate = this.activateRoute.snapshot.paramMap.get('birthdate');


  constructor(public activateRoute : ActivatedRoute, private router: Router, public formBuilder: FormBuilder) { 

    this.myForm2 = this.createMyForm();

  }

  private createMyForm(){
    return this.formBuilder.group({
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      telnumber: new FormControl('', Validators.required),
    })
  }

  goAlert(){
    console.log(this.varName, this.varSurname, this.varGender, this.varBirthDate, this.myForm2.value.country, this.myForm2.value.state, this.myForm2.value.city, this.myForm2.value.adress, this.myForm2.value.code, this.myForm2.value.telNumber);
  }

  ngOnInit() {
  }

}
