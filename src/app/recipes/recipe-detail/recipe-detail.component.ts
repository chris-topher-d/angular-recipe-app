import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shopplingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(ingredients) {
    ingredients.forEach(ingredient => {
      this.shopplingListService.addIngredient(ingredient);
    });
  }
}
