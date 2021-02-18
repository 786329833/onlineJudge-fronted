import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/main/models/userInfo.model';
import { HttpRequireService } from 'src/app/main/service/http-require.service';
import { RegisterError } from '../../../constants/registerError';
import { CustomizeValidatorClass } from '../../../utils/ValidatorsFn';
@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {
  account: string;
  passwd = '';
  passwdRepeat: string;
  username: string;
  errorCode = 0;
  errorDetail = RegisterError;

  // 必填
  accountFormControl = new FormControl('', [Validators.required,
  this.hasExisted('12345678')]);
  // 验证两次密码输入是否一致
  passwdComfirmFormControl = new FormControl('', [Validators.pattern(this.passwd)]);
  // 由数字和字母组成 6 - 16位
  constructRuleFormControl = new FormControl('', [Validators.pattern('^[A-Za-z0-9_]{6,16}$')]);

  constructor(
    private httpRequireServer: HttpRequireService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.passwd !== this.passwdRepeat) {
      this.errorCode = RegisterError.twoPasswdNotSame.errCode;
    }
    // if (this.passwd !== '' && this.passwd === this.passwdRepeat) {
    //   const registerInfo = new UserInfo(this.account, this.passwd, this.username);
    //   this.httpRequireServer.register('register', registerInfo);
    // }
  }

  // notion整理
  hasExisted(confirmString: string): ValidatorFn {
    return (self: AbstractControl): { [key: string]: any } => {
      const value = self.value;
      return (value === confirmString ? null : { match: true });
    };
  }

}
