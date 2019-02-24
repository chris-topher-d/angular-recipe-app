import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(name, amount) {
    const ingredient = new Ingredient(name, amount);
    this.newIngredient.emit(ingredient);
  }
}
