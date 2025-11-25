import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-light-bg dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
        <div class="flex justify-center space-x-6 mb-4">
          <a href="https://www.behance.net/designerrita" target="_blank" rel="noopener noreferrer" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Behance</a>
          <a href="https://www.linkedin.com/in/ritawebdesigner" target="_blank" rel="noopener noreferrer" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">LinkedIn</a>
          <a href="mailto:ritagkp@gmail.com" class="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Email</a>
        </div>
        <p>&copy; {{ currentYear }} Rita Das. All Rights Reserved.</p>
        <p class="text-sm mt-2">Designed & Built with Passion.</p>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}