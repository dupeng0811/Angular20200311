import { Component, OnInit } from '@angular/core';
import {StorageserviceService} from '../storageservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public  stoarge: StorageserviceService) {
    console.log(this.stoarge.get('from home component'));
  }
  ngOnInit() {
  }

}
