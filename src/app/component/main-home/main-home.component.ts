import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { typeCategory } from 'src/app/types/Category';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  categories: typeCategory[]
  constructor(
    private categoryService: CategoryService,
  ) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }

}
