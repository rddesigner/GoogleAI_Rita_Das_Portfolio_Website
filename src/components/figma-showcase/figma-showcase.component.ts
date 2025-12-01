
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-figma-showcase',
  template: `
    <section id="figma" class="py-20">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          
          <div class="md:w-1/3 flex justify-center p-4 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-violet opacity-30 rounded-full" style="filter: blur(40px);"></div>
            <img src="src/assets/logos/figma.svg" alt="Figma Logo" class="w-32 h-32 relative z-10 text-text-primary" />
          </div>

          <div class="md:w-2/3">
            <div class="text-center md:text-left mb-8 md:mb-0">
              <h2 class="text-4xl font-bold mb-4 gradient-text">Figma Prototypes</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto md:mx-0"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              @for(project of projects; track project.url) {
                <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-secondary p-4 rounded-lg shadow-lg hover:shadow-highlight/40 transition-all duration-300 transform hover:-translate-y-1 group">
                  <div class="w-full h-32 bg-primary rounded-md mb-4 flex items-center justify-center border border-secondary">
                    <svg class="w-12 h-12 text-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 1.5l-9 3 9 3 9-3-9-3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 6v12l9 3V9l-9-3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 1.5v12" /></svg>
                  </div>
                  <h3 class="font-bold text-text-primary truncate group-hover:text-highlight text-sm">{{ project.title }}</h3>
                  <p class="text-xs text-text-secondary mt-1 h-10">{{ project.description }}</p>
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
export class FigmaShowcaseComponent {
  projects: Project[] = [
    { title: 'FlyEasy', url: 'https://www.figma.com/proto/DVjJ2AXnypfIgLMWEkVDVZ/FlyApp?node-id=2-2&starting-point-node-id=2%3A2', description: 'User-centric airport assistance app.' },
    { title: 'Unified FinFlow', url: 'https://www.figma.com/proto/M0H0FgAmJjJ72bR66ZnoxK/Unified-FinFlow?node-id=5-1659', description: 'Interactive financial dashboard concept.' },
    { title: 'UpGenie', url: 'https://www.figma.com/proto/q3gmapgOlvrTorJb8nLYOT/Test_01?node-id=40-2&starting-point-node-id=40%3A2', description: 'AI platform with dark mode.' },
    { title: 'UtsabWale', url: 'https://www.figma.com/proto/HoEu8zxz94wy8vf4HFY1PY/UtsabWale?node-id=36-34&p=f&t=xWhPwB7n1iqpnjmQ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=36%3A34', description: 'Unique wedding memory creation.' },
    { title: 'Rabobank Dashboard', url: 'https://www.figma.com/make/TIAhiT4mTWbA29uyGpeTyt/Rabobank-Interactive-Dashboard?node-id=0-1&p=f&t=i3X2bMKcTjjJuS4R-0&fullscreen=1', description: 'Financial data visualization dashboard.' },
  ];
}