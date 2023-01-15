import { Component, ConstructorSansProvider, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, Temp } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  constructor(){}

  @Input()
  title:string = "";

  @Input()
  crs:Course = Temp;

  @Input()
  index:number = 0;

  @Output()
  view = new EventEmitter<Course>();

  ngOnInit(){}

  onCrsViewed(){
    console.log("Course category:")
    this.view.emit(this.crs)
  }

  classes(){
    if (this.crs.category == 'ADVANCED')
      return {'advanced':true, 'course-card':true};
    else if (this.crs.category == 'BEGINNER')
      return {'beginner':true, 'course-card':true}
    else
      return 'course-card' 
  }
}
