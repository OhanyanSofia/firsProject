import {Component, OnInit} from '@angular/core';
import {ShopServiceService} from "../../../shared/services/shop-service.service";
import {ShoppingList} from "../../../shared/models/shopping-list";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  shoppingLists: ShoppingList[] = []

  constructor(private service: ShopServiceService) {
  }

  ngOnInit(): void {
    this.shoppingLists = this.service.shoppingLists;

  }

}
