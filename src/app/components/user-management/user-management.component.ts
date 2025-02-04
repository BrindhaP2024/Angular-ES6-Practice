import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { identity } from 'rxjs';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

  isMorning:boolean = true;
  grade:number= 0;
  msg:any = [
    {
      id:1,
      message:'Welcome'
    },
    {
      id:2,
      message:'Good Luck!'
    },
    {
      id:3,
      message:'Good bye!'
    }
  ]
  morningToggle():boolean {
    this.isMorning = !this.isMorning;
    return this.isMorning;
  }



  set(x: number) {
    this.grade = x;
}


}
