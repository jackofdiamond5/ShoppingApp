import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    constructor(public slService: ShoppingListService) { }

    private _recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is a test recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [new Ingredient('tomatoe', 1), new Ingredient('onion', 2)]
        ),
        new Recipe(
            'Another test recipe',
            'This is a test recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [new Ingredient('potatoe', 3), new Ingredient('olive', 6)]
        )
    ];

    public get recipes() {
        return this._recipes;
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
