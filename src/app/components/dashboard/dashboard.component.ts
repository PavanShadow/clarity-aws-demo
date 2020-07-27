import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: User;
  userCount: number;
  editUser: User;
  departments: any;

  constructor(
    public userService: UserService,
    public departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res['result']['Items'];
      this.userCount = res['result']['Count'];
    });
    this.departmentService.getDepartments().subscribe((res) => {
      this.departments = res['result']['Items'];
      // this.editUser.department = 'MN';
      // this.userForm.get('department').setValue(this.departments[0].name);
    });
  }

  save() {
    this.userService.updateUser(this.editUser).then((res) => {
      console.log(res);
    });
  }
}
