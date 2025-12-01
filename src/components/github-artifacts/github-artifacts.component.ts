
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-github-artifacts',
  template: `
    <section id="github-artifacts" class="py-20 bg-secondary/30">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          <div class="md:w-1/3 flex justify-center p-4 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-violet opacity-30 rounded-full" style="filter: blur(40px);"></div>
            <img src="src/assets/logos/github.svg" alt="GitHub Logo" class="w-32 h-32 relative z-10 text-text-primary" />
          </div>

          <div class="md:w-2/3">
            <div class="text-center md:text-left mb-8 md:mb-0">
              <h2 class="text-4xl font-bold mb-4 gradient-text">GitHub Artifacts</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto md:mx-0"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              @for(project of projects; track project.url) {
                <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-primary p-4 rounded-lg shadow-lg hover:shadow-highlight/40 transition-all duration-300 transform hover:-translate-y-1 group">
                  <div class="w-full h-32 bg-secondary rounded-md mb-4 flex items-center justify-center">
                    <svg class="w-12 h-12 text-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
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
export class GithubArtifactsComponent {
  projects: Project[] = [
    { title: 'Event Selfie Capture', url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Event_Selfie_Capture', description: 'AI-powered event selfie moments.' },
    { title: 'UX Interview Assistant', url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Smart-Interview_Assistant', description: 'Smart AI assistant for interviews.' },
    { title: 'Text 2 AdobeXD Autogen', url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Text_To_AdobeXD_AutoGen', description: 'Generate Adobe XD from text.' },
    { title: 'ElderCare Companion App', url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Eldercare_Companion_App', description: 'AI companion for elderly care.' },
    { title: 'Portfolio Website', url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Portfolio_Website', description: 'This portfolio\'s source code.' },
    { title: 'Industry Event', url: 'https://github.com/rddesigner/IndustryEvent', description: 'Event management application concept.' },
    { title: 'QlikCert', url: 'https://github.com/rddesigner/QlikCert', description: 'Certificate generation and verification.' },
    { title: 'Innovasio', url: 'https://github.com/rddesigner/inovasio', description: 'Innovation platform and idea hub.' },
    { title: 'Inside Look', url: 'https://github.com/rddesigner/InsideLook', description: 'Internal corporate social network.' },
  ];
}