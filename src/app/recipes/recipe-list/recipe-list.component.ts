import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/thumb/9/9a/Courgette_and_garlic_pasta_recipe.jpg/300px-Courgette_and_garlic_pasta_recipe.jpg'
    ),
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
