import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { RecipesComponent } from './recipes.component';

export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another test recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  public get recipes() {
      return this._recipes;
  }
}
