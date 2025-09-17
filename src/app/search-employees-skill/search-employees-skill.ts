import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";

@Component({
  selector: 'app-search-employees-skill',
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './search-employees-skill.html',
  styleUrl: './search-employees-skill.css'
})
export class SearchEmployeesSkillComponent {
    searchText: any;
    employees = [];


}
