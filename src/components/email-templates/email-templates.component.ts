
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-email-templates',
  template: `
    <section id="email-templates" class="py-20">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          
          <div class="md:w-1/3 flex justify-center p-4 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-violet opacity-30 rounded-full" style="filter: blur(40px);"></div>
            <img src="src/assets/logos/email.svg" alt="Email Logo" class="w-32 h-32 relative z-10 text-text-primary" />
          </div>

          <div class="md:w-2/3">
            <div class="text-center md:text-left mb-8 md:mb-0">
              <h2 class="text-4xl font-bold mb-4 gradient-text">Email Templates</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto md:mx-0"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              @for(project of projects; track project.url) {
                <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-secondary p-4 rounded-lg shadow-lg hover:shadow-highlight/40 transition-all duration-300 transform hover:-translate-y-1 group">
                  <img [src]="'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(project.url) + '?w=400&h=300'" [alt]="project.title" class="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105">
                  <h3 class="font-bold text-text-primary truncate group-hover:text-highlight">{{ project.title }}</h3>
                  <p class="text-sm text-text-secondary mt-1 h-10">{{ project.description }}</p>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class EmailTemplatesComponent {
  projects: Project[] = [
    { title: 'PhotoBook Ad', url: 'https://www.behance.net/gallery/65369109/Email-Template', description: 'Template for PhotoBook advertisement.' },
    { title: 'RitzPix Ad 1', url: 'https://www.behance.net/gallery/237771069/Email-Template', description: 'Template for RitzPix advertisement.' },
    { title: 'RitzPix Ad 2', url: 'https://www.behance.net/gallery/237771029/Email-Template', description: 'Another template for RitzPix ad.' },
  ];
  encodeURIComponent = encodeURIComponent;
}