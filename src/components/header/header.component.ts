import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header class="sticky top-0 z-50 transition-all duration-300" 
            [class.bg-light-bg/80]="!isScrolled()"
            [class.dark:bg-dark-bg/80]="!isScrolled()"
            [class.bg-light-card]="isScrolled()"
            [class.dark:bg-dark-card]="isScrolled()"
            [class.shadow-lg]="isScrolled()"
            [class.dark:shadow-black/50]="isScrolled()"
            style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-light-accent dark:text-dark-accent tracking-wider">
          RITA DAS
        </a>
        <div class="hidden md:flex items-center space-x-8 font-medium">
          <a href="#about" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">About</a>
          <a href="#experience" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Experience</a>
          <a href="#skills" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Skills</a>
          <a href="#portfolio" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Portfolio</a>
          <a href="#contact" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Contact</a>
        </div>
        <div class="flex items-center space-x-4">
          <button (click)="toggleTheme.emit()" class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg">
            @if (isDarkMode()) {
              <!-- Sun Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            } @else {
              <!-- Moon Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            }
          </button>
          <button class="md:hidden" (click)="toggleMobileMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      @if(isMobileMenuOpen()) {
        <div class="md:hidden px-6 pb-4 flex flex-col items-center space-y-4">
            <a href="#about" (click)="toggleMobileMenu()" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">About</a>
            <a href="#experience" (click)="toggleMobileMenu()" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Experience</a>
            <a href="#skills" (click)="toggleMobileMenu()" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Skills</a>
            <a href="#portfolio" (click)="toggleMobileMenu()" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Portfolio</a>
            <a href="#contact" (click)="toggleMobileMenu()" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Contact</a>
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
  isDarkMode = input.required<boolean>();
  toggleTheme = output<void>();

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}