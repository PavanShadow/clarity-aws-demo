import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';
import { Department } from 'src/app/models/department.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  departments: Department;
  success: boolean = false;
  error: boolean = false;
  constructor(
    public departmentService: DepartmentService,
    public userService: UserService
  ) {}

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((res) => {
      this.departments = res['result']['Items'];
      this.userForm.get('department').setValue(this.departments[0].depName);
    });
  }
  addUser(formValue: User): void {
    if (this.userForm.valid) {
      this.userService.uploadUser(formValue).then((res) => {
        if (res) {
          this.success = true;
          setTimeout(() => {
            this.success = false;
            this.userForm.reset();
          }, 3000);
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      });
    }
  }
}
