import { asNativeElements, Component, ElementRef, HostBinding, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';

  // show = false;

  // showclass = false;

  // isSpecial = true;

  // classAdd = 'margin';

  // value : string = "hello";

  // today = new Date();
  // http: any;

  // showcontrol() {
  //   this.show = !this.show;
  // }

  constructor(  ) {
    const myobs$ = new Observable( obs => {
      setTimeout(() => {
        obs.next('hello')
      }, 5000);
    } )
  
    myobs$.subscribe( x => {
      console.log(x);
    })
  }

  // jsonData = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  
  // tenseconds$ = interval(1000).pipe(
  //   map(x => new Date()),take(5)
  // )


  // const myobs$ = new Observable (obs => {
  //   setTimeout(() => {
  //     obs.next('1000');
  //   }, 1000);
  // });

  // myobs$.subscribe( sub => console.log(sub));

  // users = [
  //   {name:'aslam', age:25, gender: 'm'},
  //   {name:'nisha', age:25, gender: 'f'}]

  // // useradd(value: any) {
  // //   this.users.push({name:value:any[]});
  // //   // console.log(this.users);
    
  // // }
}



