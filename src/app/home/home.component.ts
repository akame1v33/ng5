import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[

  		trigger('goals',[
  			transition('* => *', [
  				query(':enter', style( { opacity:0 }), {optional: true} ),

  				query(':enter', stagger('300ms',[
  					animate('.6s ease-in', keyframes([
  						style({opacity: 0, transform: 'translateY(-75%)',offset: 0}),
  						style({opacity: .5, transform: 'translateY(35px)',offset: .3}),
  						style({opacity: 1, transform: 'translateY(0)',offset: 1}),
  					]))
  				]), {optional: true}),

  				query(':leave', stagger('300ms',[
  					animate('.6s ease-in', keyframes([
  						style({opacity: 1, transform: 'translateY(0)',offset: 0}),
  						style({opacity: .5, transform: 'translateY(35px)',offset: .3}),
  						style({opacity: 0, transform: 'translateY(-75%)',offset: 1}),
  					]))
  				]), {optional: true})
  			])
  		])
  ]
})


export class HomeComponent implements OnInit {
	
	itemCount: 	Number;
	btnText: 	string = "Add an Item";
	goalText: 	string = "";
	goals = [];

  constructor(private _data: DataService) {

  }

	ngOnInit() {
		 // = this.goals.length;
    // console.log( this._data );
    // this._data.goal.subscribe(res => this.goals = res; this.itemCount = this.goals.length;console.log(res) );
    this._data.goal.subscribe( res => {
      // console.log(res);
      this.goals = res;
      this.itemCount = this.goals.length;
      // this.notify();
    });

    // this._data.changeGoal(this.goals);
	}

	addItem() {
		this.goals.push(this.goalText);
		this.goalText = '';
		
    this.notify();
	}

	removeItem(indexToRemove) {
		// console.log(indexToRemove);
		this.goals.splice(indexToRemove,1);

    this.notify()
	}

  notify(){
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
