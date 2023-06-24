import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import { ActivatedRoute } from '@angular/router';
import {Car} from '../car';
import {Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent  implements OnInit {

constructor (private route: ActivatedRoute,
  private carservice:CarserviceService,
  private location: Location){}

  car:Car | undefined;
  
  ngOnInit(): void {

    const cid=Number(this.route.snapshot.paramMap.get("id"));
    this.car=this.carservice.getCarById(cid);
  }
  goToBack():void{
    this.location.back();
  }
}
