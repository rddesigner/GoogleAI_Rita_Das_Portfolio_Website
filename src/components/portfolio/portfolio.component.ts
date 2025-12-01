
import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PortfolioItem } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PortfolioComponent {
  private portfolioService = inject(PortfolioDataService);
  
  allProjects = signal<PortfolioItem[]>([]);
  categories = signal<string[]>(['All']);
  selectedCategory = signal<string>('All');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const projects = this.allProjects();
    if (category === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === category);
  });

  constructor() {
    const projects = this.portfolioService.getProjects();
    this.allProjects.set(projects);
    const uniqueCategories = [...new Set(projects.map(p => p.category))];
    this.categories.set(['All', ...uniqueCategories]);
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}