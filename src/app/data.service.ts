import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()


export class DataService {

  private goals = new BehaviorSubject<any>(['Eat devil fruit!!!!','Die on other planet.']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal( goal ) {

  	this.goals.next(goal);

  }

}
