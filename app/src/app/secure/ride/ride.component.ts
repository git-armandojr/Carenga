import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
import * as M from 'materialize-css';
import { AccountService } from '../providers/account.service';
declare var $ : any;

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {
  @ViewChild(AgmMap)
  public agmMap: AgmMap
  private modalRef: any;
  private person: any = {};
  private candidates: any[] = [];
  private currentPerson: any = {};
  private candidateCounter: number = -1;

  constructor(private provider: AccountService) { }

  async ngOnInit() {
    let modalElem = $('.modal').modal();
    this.modalRef = M.Modal.getInstance(modalElem);

    this.person = await this.provider.getAccount();
    this.candidates = await this.provider.getAccounts();
    console.log('users', this.candidates);

    this.candidates = this.candidates.filter(c => c._id != this.person._id);
    this.candidates = this.candidates.filter(c => c.lat && c.lng);
    this.candidates = this.candidates.filter(c => !this.person.matches.map(m => m._id).includes(c._id));
    this.candidates = this.candidates.filter(c => !this.person.invites.map(m => m._id).includes(c._id));
    this.candidates = this.candidates.filter(c => c.period == this.person.period);
    this.candidates = this.candidates.filter(c => c.type != this.person.type);
    console.log('candidates', this.candidates)
  }

  searchRides(){
    this.currentPerson = this.person;

    this.modalRef.open();

    setTimeout(() => this.agmMap.triggerResize(), 4000);
  }

  nextCandidate(){
    this.candidateCounter++;
    this.currentPerson = this.candidates[this.candidateCounter] || { lat: 0, lng: 0, address: '' };
    
    if(this.currentPerson._id){
      this.modalRef.open();
      this.agmMap.triggerResize();
    } else{
      M.toast({ html: 'Você já viu todos os usuários!' });
    }
  }

  refuse(person){
    this.modalRef.close();
    setTimeout(() => this.nextCandidate(), 300);
  }

  async accept(person){
    if(person.invites.map(i => i._id).includes(this.person._id)){
      
      person.invites = person.invites.filter(i => i._id != this.person._id);

      let personMatch = {
        name: this.person.firstName,
        mail: this.person.email,
        _id: this.person._id,
        lat: this.person.lat,
        lng: this.person.lng,
        address: this.person.address,
      };
      person.matches.push(personMatch);

      let myMatch = {
        name: person.firstName,
        mail: person.email,
        _id: person._id,
        lat: person.lat,
        lng: person.lng,
        address: person.address,
      };
      this.person.matches.push(myMatch);
      
      console.log('save my ride', this.person);
      console.log('save person ride', person);
      
      await this.provider.updateAccount(this.person);
      await this.provider.updateAccount(person);
      
      M.toast({ html: 'Nova carona cadastrada!' });

    } else{
      
      let invite = {
        name: person.firstName,
        mail: person.email,
        _id: person._id,
        lat: person.lat,
        lng: person.lng,
        address: person.address,
      };
      this.person.invites.push(invite);

      console.log('save invite', invite);
      await this.provider.updateAccount(this.person);
    }

    this.modalRef.close();
    setTimeout(() => this.nextCandidate(), 300);
  }
  removeMatch(match){
    this.person.matches = this.person.matches.filter(i => i != match);
    this.provider.updateAccount(this.person);
  }
  removeInvite(invite){
    this.person.invites = this.person.invites.filter(i => i != invite);
    this.provider.updateAccount(this.person);
  }
}
