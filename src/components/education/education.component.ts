import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

@Component({
  selector: 'app-education',
  template: `
    <section id="education" class="py-20 bg-primary">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 gradient-text">Education</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 w-0.5 h-full bg-secondary transform -translate-x-1/2"></div>

        @for(edu of educationHistory; track edu.degree; let i = $index) {
          <div class="relative mb-12 flex items-center" [class.justify-start]="i % 2 === 0" [class.justify-end]="i % 2 !== 0">
            <div class="w-1/2" [class.pr-8]="i % 2 === 0" [class.pl-8]="i % 2 !== 0">
              <div class="bg-secondary p-6 rounded-lg shadow-lg" [class.text-right]="i % 2 !== 0">
                <h3 class="text-xl font-bold text-accent-pink">{{ edu.degree }}</h3>
                <p class="font-semibold mb-2 text-text-primary">{{ edu.institution }}</p>
                <p class="text-sm text-text-secondary mb-3">{{ edu.year }}</p>
                <p class="text-sm text-text-primary">{{ edu.details }}</p>
              </div>
            </div>
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 w-4 h-4 bg-accent-violet rounded-full transform -translate-x-1/2 border-4 border-primary"></div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class EducationComponent {
  educationHistory: Education[] = [
    {
      degree: 'Diploma in Multimedia and Animation',
      institution: 'Jadavpur University (CAD Center), Kolkata',
      year: '2009',
      details: 'Achieved a score of 71%.',
    },
    {
      degree: 'Bachelor of Arts [English (Hons.)]',
      institution: 'University of Calcutta',
      year: '2007',
      details: 'Graduated with 49%.',
    },
    {
      degree: 'Higher Secondary (Science)',
      institution: 'W.B.C.H.S.E, Kolkata',
      year: '2004',
      details: 'Completed with 61%.',
    },
    {
      degree: 'Secondary Education',
      institution: 'W.B.B.S.E, Kolkata',
      year: '2002',
      details: 'Completed with 77%.',
    },
  ];
}
