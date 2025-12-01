
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-google-ai',
  template: `
    <section id="google-ai" class="py-20">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          <div class="md:w-1/3 flex justify-center p-4 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-violet opacity-30 rounded-full" style="filter: blur(40px);"></div>
            <img src="src/assets/logos/google.svg" alt="Google Logo" class="w-32 h-32 relative z-10 text-text-primary" />
          </div>

          <div class="md:w-2/3">
            <div class="text-center md:text-left mb-8 md:mb-0">
              <h2 class="text-4xl font-bold mb-4 gradient-text">Google AI</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto md:mx-0"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              @for(project of projects; track project.url) {
                <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-secondary p-4 rounded-lg shadow-lg hover:shadow-highlight/40 transition-all duration-300 transform hover:-translate-y-1 group">
                   <div class="w-full h-40 bg-primary rounded-md mb-4 flex items-center justify-center">
                    <svg class="w-16 h-16 text-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.5 18l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456L20.5 18l-1.178.398a3.375 3.375 0 00-2.424 2.174z" />
                    </svg>
                   </div>
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
export class GoogleAiComponent {
  projects: Project[] = [
    { title: 'ElderCare Prototype', url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221Ody2DZu-e1L1J2Q4NIw4f3d4nyI4oZ-n%22%5D,%22action%22:%22open%22,%22userId%22:%22105174546029687193833%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing', description: 'AI companion app for elderly.' },
    { title: 'UtsavWale Prototype', url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221RWWjtnPlShWPOD6bdXK9jPUHURUKwyU6%22%5D,%22action%22:%22open%22,%22userId%22:%22105174546029687193833%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing', description: 'AI wedding memory creation app.' },
    { title: 'UX Interview Assistant', url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%2217PA_uwHC2gQMNpMjpjIStN7Fzk4Yu92p%22%5D,%22action%22:%22open%22,%22userId%22:%22105174546029687193833%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing', description: 'AI assistant for UX interviews.' },
    { title: 'Text to AdobeXD AutoGen', url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221KLzuaScJjIfZ-X5zqBZAGOzKhGQLG0I7%22%5D,%22action%22:%22open%22,%22userId%22:%22105174546029687193833%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing', description: 'Generate Adobe XD from text.' },
  ];
}