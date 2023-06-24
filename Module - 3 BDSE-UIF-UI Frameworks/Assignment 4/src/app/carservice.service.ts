import { Injectable } from "@angular/core";
import {CARLISTS } from './mock-cars';
import {Car} from "./car";

@Injectable({
    providedIn: 'root'
})
export class CarserviceService {

    constructor() { }
    
    //create a method to get all data from datalist
    getAllcar():Car[]{
        return CARLISTS;
    }

    //ceate a method to get all data from datalist
    getCarById(cid:number):Car{
        const car=CARLISTS.find(c=>c.carid=== cid)!;
        return car;
    }
}