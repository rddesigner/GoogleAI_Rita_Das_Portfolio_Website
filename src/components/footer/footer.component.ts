import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-primary border-t border-secondary">
      <div class="container mx-auto px-6 py-8 text-center text-text-secondary">
        <div class="flex justify-center space-x-6 mb-4">
          <a href="https://www.behance.net/designerrita" target="_blank" rel="noopener noreferrer" class="hover:text-highlight transition-colors">Behance</a>
          <a href="https://www.linkedin.com/in/ritawebdesigner" target="_blank" rel="noopener noreferrer" class="hover:text-highlight transition-colors">LinkedIn</a>
          <a href="mailto:ritagkp@gmail.com" class="hover:text-highlight transition-colors">Email</a>
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