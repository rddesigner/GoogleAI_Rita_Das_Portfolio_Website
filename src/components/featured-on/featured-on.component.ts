import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PortfolioItem } from '../../services/portfolio-data.service';

interface Platform {
  name: string;
  logoSvg: string;
  projects: PortfolioItem[];
}

@Component({
  selector: 'app-featured-on',
  template: `
    <section id="platforms" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 gradient-text">Platforms I Work On</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        @for(platform of platforms; track platform.name) {
          <div class="relative group aspect-square bg-secondary rounded-lg shadow-lg flex items-center justify-center p-6 transition-all duration-300 transform hover:scale-105">
            <div class="w-20 h-20 text-text-secondary group-hover:text-white filter grayscale group-hover:grayscale-0 transition-all duration-300" [innerHTML]="platform.logoSvg"></div>
            
            <div class="absolute inset-0 bg-black/70 backdrop-blur-md rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center overflow-auto">
              <h3 class="font-bold text-lg mb-2 text-white">{{ platform.name }}</h3>
              <div class="space-y-1">
                @for(project of platform.projects; track project.title) {
                  <a [href]="project.projectUrl" target="_blank" rel="noopener noreferrer" class="block text-sm text-text-primary hover:text-highlight transition-colors truncate">
                    {{ project.title }}
                  </a>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  styles: [
    ':host ::ng-deep svg { width: 100%; height: 100%; }'
  ]
})
export class FeaturedOnComponent {
  private portfolioService = inject(PortfolioDataService);
  platforms: Platform[];

  constructor() {
    const allProjects = this.portfolioService.getProjects();
    this.platforms = [
      {
        name: 'Figma',
        logoSvg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Figma</title><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM12 3.75a2.25 2.25 0 012.25 2.25v4.5A2.25 2.25 0 0112 12.75H9.75a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 012.25-2.25H12zM9.75 3.75a2.25 2.25 0 00-2.25 2.25v4.5a2.25 2.25 0 002.25 2.25H12a2.25 2.25 0 100-4.5H9.75V6a2.25 2.25 0 012.25-2.25 2.25 2.25 0 000-4.5A2.25 2.25 0 009.75 3.75zm0 14.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm4.5-2.25a2.25 2.25 0 012.25 2.25 2.25 2.25 0 11-4.5 0 2.25 2.25 0 012.25-2.25z"/></svg>',
        projects: allProjects.filter(p => p.category === 'Figma')
      },
      {
        name: 'Adobe XD',
        logoSvg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Adobe XD</title><path d="M15.42 2.37H8.58A6.22 6.22 0 002.37 8.58v6.84a6.22 6.22 0 006.21 6.21h6.84a6.22 6.22 0 006.21-6.21V8.58a6.22 6.22 0 00-6.21-6.21zm-3.6 14.27h-2.3v-2.39L7.9 16.6l-2.02-2.33 1.7-1.42 1.6 2.3v-.01h.2V8.36H7.13V6h6.79v2.37h-2.1v6.27zm6.75-3.32a2.43 2.43 0 01-2.02 1.3 3.33 3.33 0 01-2.18-.36l.73-2.06a1.18 1.18 0 00.9.3 1.13 1.13 0 00.9-.38 1.12 1.12 0 000-1.58 1.13 1.13 0 00-.9-.38 1.18 1.18 0 00-.9.3l-.73-2.06a3.33 3.33 0 012.18-.36 2.43 2.43 0 012.02 1.3 2.78 2.78 0 010 3.2z"/></svg>',
        projects: allProjects.filter(p => p.title.includes('Adobe XD'))
      },
      {
        name: 'Behance',
        logoSvg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Behance</title><path d="M22.344 7.825c-.283-1.026-.8-1.875-1.547-2.547-.746-.672-1.688-1.031-2.812-1.031h-9.938v15.531h9.938c1.125 0 2.063-.359 2.812-1.031.747-.672 1.266-1.521 1.547-2.547.281-1.026.422-2.261.422-3.704s-.141-2.678-.422-3.701zm-5.063 5.344c-.219.531-.563.953-1.031 1.266-.469.313-1.031.469-1.688.469h-4.594v-7.125h4.594c.656 0 1.219.156 1.688.469.469.313.813.734 1.031 1.266s.328 1.156.328 1.875-.109 1.344-.328 1.875zM1.656 2.25h4.969v4.969h-4.969v-4.969zm2.5 12.063h-5.031v4.938h5.031c.906 0 1.641-.281 2.188-.844.547-.563.828-1.281.828-2.156s-.281-1.594-.828-2.156c-.547-.563-1.281-.844-2.188-.844z"/></svg>',
        projects: allProjects.filter(p => p.projectUrl.includes('behance.net'))
      },
      {
        name: 'GitHub',
        logoSvg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>',
        projects: allProjects.filter(p => p.projectUrl.includes('github.com'))
      },
      {
        name: 'Generative AI',
        logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"/></svg>',
        projects: allProjects.filter(p => p.title.toLowerCase().includes('ai'))
      }
    ];
  }
}
