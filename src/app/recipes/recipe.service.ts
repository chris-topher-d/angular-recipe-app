import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Big Rice Bowl',
            'An absolutely massive bowl of rice',
            'https://upload.wikimedia.org/wikipedia/commons/7/77/Steamed_rice_in_bowl_01.jpg',
            [
                new Ingredient('Bag of rice', 1)
            ]
        ),
        new Recipe(
            'Spaghetti',
            'Old school spaghetti recipe',
            'https://www-tc.pbs.org/food/wp-content/blogs.dir/2/files/2015/04/hepburn-spaghetti-pomodoro640x360.jpg',
            [
                new Ingredient('Spaghetti noodles, 16 oz bag', 1),
                new Ingredient('Spaghetti sauce, large jar', 1),
                new Ingredient('Large can of peeled Roma tomatoes', 1)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
