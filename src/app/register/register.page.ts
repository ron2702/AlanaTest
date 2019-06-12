import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  goRegister2(){
    this.router.navigate(['/register2']);
  }

  goRegister2NavContrl(){
    this.navCtrl.navigateForward('/register2');
  }

  ngOnInit() {
  }

}
