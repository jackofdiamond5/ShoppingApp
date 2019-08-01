import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another test recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  @Output()
  public recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
