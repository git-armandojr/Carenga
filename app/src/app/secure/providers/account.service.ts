import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }
  
  private getHeaders(): any{
    return {
      headers: {
        'Content-Type': 'application/json',
        'responseType': 'text',
        'x-access-token': localStorage.getItem('jwt')
      }
    };
  }
  
  getAccounts(): Promise<any> {
    return this.http.get('/api/account/getAll', this.getHeaders())
    .toPromise();
  }
  getAccount(id?: string): Promise<any> {
    return this.http.get('/api/account/get/' + (id || ''), this.getHeaders())
    .toPromise();
  }

  updateAccount(item: any): Promise<any> {
    return this.http.post('/api/account/update', item, this.getHeaders())
    .toPromise();
  }

  deleteAccount(item: any): Promise<any> {
    return this.http.delete(`/api/account/delete/${item._id}`, this.getHeaders())
    .toPromise();
  }

}
