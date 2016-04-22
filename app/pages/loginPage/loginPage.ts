import { Page, NavController } from 'ionic-angular';
import { AuthService } from '../../services/authService/authService';
import { FormBuilder, Control, ControlGroup } from 'angular2/common';
import { TabsPage } from '../tabs/tabs';

@Page({
    templateUrl: 'build/pages/loginPage/loginPage.html',
    providers: [AuthService, TabsPage]
})

export class LoginPage {

    private userForm: ControlGroup;
    private userName: Control;
    private password: Control;

    constructor(private fb: FormBuilder, private authService: AuthService, private navController: NavController) {
        
        // Create the form controls
        this.userName = fb.control('');
        this.password = fb.control('');
        this.userForm = fb.group({
            username: this.userName,
            password: this.password
        });
    }

    public register(): void {
        //this.authService.authenticate(this.userName.value, this.password.value);
        this.navController.setRoot(TabsPage);
    }
}