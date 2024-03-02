import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  @Input("show_sidebar") show_sidebar = false;
  
  // // // Submenu toggle switches 
  // // Shop by Catagory
  show_submenu_shop_by_catagory = false;
  // Shop by Catagory Submenus
  show_submenu_rings = false;
  show_submenu_necklace_and_pendent = false;
  show_submenu_earings = false;
  show_submenu_other = false;
  // // Latest Arrival
  show_submenu_latest_arrival = false;
  // // Gift Store
  show_submenu_gift_store = false;
  // Gift Store Submenu
  show_submenu_shop_by_occation = false;
  show_submenu_shop_by_theme = false;
  show_submenu_shop_by_recipient = false;
  show_submenu_shop_by_price = false;

  toggle_shop_by_catagory(){
    if (this.show_submenu_shop_by_catagory){
      this.show_submenu_rings = false
    }
    this.show_submenu_shop_by_catagory = !this.show_submenu_shop_by_catagory;
  }

}
