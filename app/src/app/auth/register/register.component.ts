import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import * as M from 'materialize-css';
declare var $ : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private selectRef: any;
  private entity: any = {};

  constructor(private provider: AuthService) { }

  ngOnInit() {
    let selectElem = $('select').formSelect();
    this.selectRef = M.FormSelect.getInstance(selectElem);
  }
  
  private signUp(entity: any){
    this.provider.register(entity)
    .then(() => M.toast({ html: 'Cadastro Realizado com Sucesso!' }))
    .then(() => this.entity = {})
    .catch(e => M.toast({ html: e.error }));
  }
}