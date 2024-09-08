import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventService {

  public eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  // Método para emitir eventos globalmente
  emitEvent(data: any) {
    this.eventEmitter.emit(data);
  }

  // Método para escutar eventos globalmente
  onEvent(callback: (data: any) => void) {
    this.eventEmitter.subscribe(callback);
  }
}
