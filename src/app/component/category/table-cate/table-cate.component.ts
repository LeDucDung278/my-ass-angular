import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { typeCategory } from 'src/app/types/Category';

@Component({
  selector: 'app-table-cate',
  templateUrl: './table-cate.component.html',
  styleUrls: ['./table-cate.component.css']
})
export class TableCateComponent implements OnInit {
  categories: typeCategory[]
  constructor(
    private categoryService: CategoryService
  ) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.GetListCategory()
  }

  GetListCategory() {
    this.categoryService.listCategories().subscribe((data)=>{
      this.categories = data
    })
  }
  onDelete(id: string) {
    // cofirm
    const comfirmDelete = confirm('Bạn chắc chắn muốn xóa')
    if(comfirmDelete && id){
      this.categoryService.deleteCategory(id).subscribe(data =>{
        // Cập nhật dannh sách
        this.GetListCategory()
      })
      console.log(id);
      
    }
  }

}
