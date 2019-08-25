import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public get ingredients() {
        return this._ingredients;
    }

    public addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }
}
