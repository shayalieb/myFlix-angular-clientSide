import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//Components to wire up with the stylesheet and template
@Component({
    selector: 'app-user-login-form',//Will render here
    templateUrl: './user-login-form.component.html',
    styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
    //Input decorators that will take userData and pass it on to the API
    @Input() userData = { Username: '', Password: '', };

    constructor(
        public fetchApiData: FetchApiDataService,
        public dialogRef: MatDialogRef<UserLoginFormComponent>,
        public snackBar: MatSnackBar,
        private router: Router,
        ) { }

    ngOnInit(): void {
    }

    loginUser(): void {
        this.fetchApiData.userLogin(this.userData).subscribe((data) => {
            localStorage.setItem('users', JSON.stringify(data.user))
            localStorage.setItem('token', data.token)
            localStorage.setItem('Username', data.user.Username)
            this.router.navigate(['movies'])
            this.dialogRef.close();
            this.snackBar.open('You are now logged in', 'OK', {
                duration: 2000
            });
        }, () => {
            this.snackBar.open('Something went wrong', 'OK', {
                duration: 2000
            })
        })
    }
}