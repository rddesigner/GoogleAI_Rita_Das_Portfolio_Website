
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header class="sticky top-0 z-50 transition-all duration-300" 
            [class.bg-primary/80]="!isScrolled()"
            [class.bg-secondary/90]="isScrolled()"
            [class.shadow-lg]="isScrolled()"
            [class.shadow-black/50]="isScrolled()"
            style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold tracking-wider gradient-text">
          RITA DAS
        </a>
        <div class="hidden md:flex items-center space-x-6 font-medium">
          <a href="#about" class="hover:text-highlight transition-colors">About</a>
          <a href="#experience" class="hover:text-highlight transition-colors">Experience</a>
          <a href="#skills" class="hover:text-highlight transition-colors">Skills</a>
          <a href="#figma" class="hover:text-highlight transition-colors">Figma</a>
          <a href="#behance" class="hover:text-highlight transition-colors">Behance</a>
          <a href="#github-artifacts" class="hover:text-highlight transition-colors">GitHub</a>
          <a href="#contact" class="hover:text-highlight transition-colors">Contact</a>
        </div>
        <div class="flex items-center space-x-4">
          <button class="md:hidden" (click)="toggleMobileMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      @if(isMobileMenuOpen()) {
        <div class="md:hidden px-6 pb-4 flex flex-col items-center space-y-4">
            <a href="#about" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">About</a>
            <a href="#experience" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">Experience</a>
            <a href="#skills" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">Skills</a>
            <a href="#figma" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">Figma</a>
            <a href="#behance" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">Behance</a>
            <a href="#github-artifacts" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">GitHub</a>
            <a href="#contact" (click)="toggleMobileMenu()" class="hover:text-highlight transition-colors">Contact</a>
        </div>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}