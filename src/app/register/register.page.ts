import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public navCtrl: NavController, public formBuilder: FormBuilder) {

    this.myForm = this.createMyForm();

   }

  private createMyForm(){
    return this.formBuilder.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
    })
  }

  goRegister2(){
    this.router.navigate(['/register2', this.myForm.value.name, this.myForm.value.surname, this.myForm.value.gender, this.myForm.value.birthDate]);
  }

  goRegister2NavContrl(){
    this.navCtrl.navigateForward('/register2');
    console.log("nombre: ", this.myForm.value.name);
    console.log("apellido: ", this.myForm.value.surname);
    console.log("genero: ", this.myForm.value.gender);
    console.log("fecha de nacimiento: ", this.myForm.value.birthDate);
  }


  ngOnInit() {
  }

}
