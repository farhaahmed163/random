import { Component } from '@angular/core';
import { User } from './../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = "Farha Ahmed"
  users: User[] = [
    { name: "ahmed", age: 28, gender: "Male", sallary: 3000 },
    { name: "farha", age: 23, gender: "Female", sallary: 5000 },
    { name: "faroha", age: 28, gender: "Female", sallary: 15000 },
    { name: "ALi", age: 28, gender: "Male", sallary: 3000 },
    { name: "mohamed", age: 28, gender: "Male", sallary: 3000 },
    { name: "ziad", age: 28, gender: "Male", sallary: 3000 },
    { name: "hazem", age: 28, gender: "Male", sallary: 3000 }]
  friends: string[] = ["Farha", "Mohamed", "Wafaa", "hana", "yassen"]
  welcome(eventInfo: Event) {
    console.log(eventInfo)
  }
  lightTheme: string = "background-color:#ccc;color:black;font-size:20px"
  mainColor: string = "#09c";
  secondColor: string = "gray"
  userName: string = "Ali";
  userAge: number = 50;
  imgSrc: string = "assets/images/gallery-04.jpg";
  imgWidth: number = 300;
}
