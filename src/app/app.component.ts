import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user= {
    name: 'bagavathiraja',
    gmail: 'tbagavathiraja@gmail.com'
  };


  constructor () {

    setInterval(() => {
      const now = new Date();
      let clk = '';
      const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December');

      clk += days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('clock').innerHTML = clk;
    }, 1000);

  }
}
