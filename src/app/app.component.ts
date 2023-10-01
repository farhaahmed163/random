import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App1';
}



function filter<T>(ages: T[]): T[] {
  return ages.slice(0, 3)
}

filter<string>(["farha", "ahmed", "gaber", "ALi"]);
filter<number>([1, 2, 3, 4]);

