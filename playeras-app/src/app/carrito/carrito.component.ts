import { Component, OnInit } from '@angular/core';
import { TotalCarComponent } from './total-car/total-car.component';
// import { CarritoRevisarComponent } from './carrito-revisar/carrito-revisar.component';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor() { 
    // $(document).ready(function() {
	// 		$('.minus').click(function () {
	// 			var $input = $(this).parent().find('input');
	// 			var count = parseInt($input.val()) - 1;
	// 			count = count < 1 ? 1 : count;
	// 			$input.val(count);
	// 			$input.change();
	// 			return false;
	// 		});
	// 		$('.plus').click(function () {
	// 			var $input = $(this).parent().find('input');
	// 			$input.val(parseInt($input.val()) + 1);
	// 			$input.change();
	// 			return false;
	// 		});
    // });
  }

  ngOnInit() {
  }

}
