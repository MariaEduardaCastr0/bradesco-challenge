import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestsService {

  GET<T>({ name }): T {
    return JSON.parse(localStorage.getItem(name));
  }
  POST({ name, payload }) {
    localStorage.setItem(name, JSON.stringify(payload));
  }
  UPDATE({ name, payload }) {
    localStorage.setItem(name, JSON.stringify(payload));
  }
  DELETE({ name }) {
    return localStorage.removeItem(name);
  }
}
