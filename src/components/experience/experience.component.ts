import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Work Experience</h2>
        <div class="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>

        @for(job of experiences; track job.company; let i = $index) {
          <div class="relative mb-12 flex items-center" [class.justify-start]="i % 2 === 0" [class.justify-end]="i % 2 !== 0">
            <div class="w-1/2" [class.pr-8]="i % 2 === 0" [class.pl-8]="i % 2 !== 0">
              <div class="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" [class.text-right]="i % 2 !== 0">
                <h3 class="text-xl font-bold text-light-accent dark:text-dark-accent">{{ job.role }}</h3>
                <p class="font-semibold mb-2">{{ job.company }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ job.duration }}</p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300" [class.text-left]="i % 2 !== 0">
                  @for(point of job.description; track point) {
                    <li class="flex items-start">
                        <svg class="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-light-accent dark:text-dark-accent" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                        <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 w-4 h-4 bg-light-accent dark:bg-dark-accent rounded-full transform -translate-x-1/2 border-4 border-light-bg dark:border-dark-bg"></div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'UX Architect & Designer Lead',
      company: 'Tata Consultancy Services, Kolkata',
      duration: 'June 2019 – Present',
      description: [
        'Architected real-time dashboard UI for solar/battery monitoring.',
        'Designed e-commerce UX for B2B steel sales, increasing conversion by 35%.',
        'Built design systems using Storybook & Figma Tokens for consistency.',
        'Delivered responsive UX for financial dashboards and banking apps.',
      ],
    },
    {
      role: 'Senior UI UX Engineer',
      company: 'MSH Business Consulting, Kolkata',
      duration: 'Mar 2018 – May 2019',
      description: [
        'Designed responsive, user-centric interfaces and validated user journeys.',
        'Created screen flows and wireframes in Adobe XD with design system standards.',
        'Built interactive prototypes to validate user flows and gather feedback.',
        'Collaborated with clients for brand guideline assessment & asset handover.',
      ],
    },
    {
      role: 'User Interface Designer',
      company: 'Medullus Systems, Kolkata',
      duration: 'Aug 2017 – Mar 2018',
      description: [
        'Led UI/UX initiatives to deliver responsive and user-friendly interfaces.',
        'Designed cross-platform UIs with Ionic, WordPress, Angular, and jQuery.',
        'Created wireframes and prototypes using Balsamiq, UXPin, and InVision.',
        'Mentored interns and led UI/HTML training across various IDEs.',
      ],
    },
    {
      role: 'Web/UI Designer',
      company: 'ISIS Design Services, Kolkata',
      duration: 'Feb 2011 - Aug 2017',
      description: [
        'Contributed to the UI/UX COE to support business growth through user research.',
        'Researched competitors to craft innovative, user-centric experiences.',
        'Designed and delivered responsive HTML templates, design assets, and Zeplin specs.',
        'Designed multiple mobile apps including Event 4us, MedLocator, and LyfeChat.',
      ],
    },
  ];
}
