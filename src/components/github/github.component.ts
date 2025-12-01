import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GithubProject {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-github',
  template: `
    <section id="github" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 gradient-text">GitHub Artifacts</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
      </div>
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <div class="md:w-1/3 flex justify-center p-4">
          <svg class="w-48 h-48 text-text-primary" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>
        </div>

        <div class="md:w-2/3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            @for(project of projects; track project.url) {
              <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-secondary p-4 rounded-lg shadow-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-1">
                <h3 class="font-bold text-text-primary truncate">{{ project.title }}</h3>
                <p class="text-sm text-text-secondary mt-1 h-10">{{ project.description }}</p>
              </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class GithubComponent {
  projects: GithubProject[] = [
    {
      title: 'Event Selfie Capture',
      url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Event_Selfie_Capture',
      description: 'AI-powered event selfie moments.',
    },
    {
      title: 'UX Interview Assistant',
      url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Smart-Interview_Assistant',
      description: 'Smart AI assistant for interviews.',
    },
    {
      title: 'Text 2 AdobeXD Autogen',
      url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Text_To_AdobeXD_AutoGen',
      description: 'Generate Adobe XD from text.',
    },
    {
      title: 'ElderCare Companion App',
      url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Eldercare_Companion_App',
      description: 'AI companion for elderly care.',
    },
    {
      title: 'Portfolio Website',
      url: 'https://github.com/rddesigner/GoogleAI_Rita_Das_Portfolio_Website',
      description: 'This portfolio\'s source code.',
    },
    {
      title: 'Industry Event',
      url: 'https://github.com/rddesigner/IndustryEvent',
      description: 'Event management application concept.',
    },
    {
      title: 'QlikCert',
      url: 'https://github.com/rddesigner/QlikCert',
      description: 'Certificate generation and verification.',
    },
    {
      title: 'Innovasio',
      url: 'https://github.com/rddesigner/inovasio',
      description: 'Innovation platform and idea hub.',
    },
    {
      title: 'Inside Look',
      url: 'https://github.com/rddesigner/InsideLook',
      description: 'Internal corporate social network.',
    },
  ];
}
