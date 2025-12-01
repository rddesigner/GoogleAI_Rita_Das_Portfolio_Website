import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Award {
  title: string;
  source: string;
  date: string;
}

@Component({
  selector: 'app-awards',
  template: `
    <section id="awards" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 gradient-text">Qualifications & Awards</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for(award of awards; track award.title + award.date) {
          <div class="bg-secondary p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform duration-300 hover:-translate-y-2">
            <div class="flex-shrink-0">
              <svg class="w-8 h-8 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg text-text-primary">{{ award.title }}</h3>
              <p class="text-sm text-text-secondary">{{ award.source }}</p>
              <p class="text-sm font-light text-text-secondary mt-1">{{ award.date }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AwardsComponent {
  awards: Award[] = [
    { title: 'Beyond Performance Award', source: 'TCS', date: 'Aug 2024' },
    { title: 'Leadership, Business Skills & Culture', source: 'TCS Internal Learning Portal', date: 'Jun 2024' },
    { title: 'Storytelling (Intermediate)', source: 'TCS Internal Learning Portal', date: 'Jun 2024' },
    { title: 'Figma for UX Design', source: 'TCS Internal Learning Portal', date: 'Apr 2024' },
    { title: 'Generative AI', source: 'TCS Internal Learning Portal', date: 'Feb 2024' },
    { title: 'Beyond Performance Award', source: 'TCS', date: 'Aug 2023' },
    { title: 'Excellence Award (3X)', source: 'TCS', date: '2021 to 2022' },
    { title: 'On the Spot Award (6X)', source: 'TCS', date: '2021 to 2025' },
    { title: 'Beyond Performance Award', source: 'TCS', date: 'Apr 2021' },
    { title: 'Excellence Award', source: 'TCS', date: 'Jun 2021' },
    { title: 'Star of Team Award', source: 'TCS', date: 'Nov 2021' },
    { title: 'Product Experience UX/UI Testing', source: 'TCS Internal Learning Portal', date: 'Sep 2020' },
    { title: 'Design Thinking - A Beginner\'s Guide', source: 'Interaction Design Foundation', date: 'Apr 2020' },
    { title: 'Diploma in Multimedia and Animation', source: 'Jadavpur University (CAD Center)', date: 'Aug 2009' },
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
