import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {

  constructor() { }

  get(text: string) {
    return 'this is a service' + text;
  }
}
