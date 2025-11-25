import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4">About Me</h2>
        <div class="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto mb-12"></div>
      </div>

      <div class="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
        <p class="mb-12">
          I am a strategic UX/UI Architect & Designer with 10+ years of experience delivering intuitive, scalable, and inclusive design solutions across web, mobile, and enterprise platforms. I specialize in crafting accessible, high-impact interfaces using Figma, Adobe XD, and Sketch, with a strong focus on user retention and engagement. I've led successful projects in B2B eCommerce, banking, real-time dashboards, and sentiment-driven designs. From WCAG-compliant interfaces to presales CX storytelling, I create user experiences that drive conversion and business growth.
        </p>

        <h3 class="text-3xl font-bold text-light-text dark:text-dark-text mb-8">Qualifications & Awards</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
          @for(item of qualifications; track item) {
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-1 text-light-accent dark:text-dark-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{{ item }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AboutComponent {
  qualifications = [
    'On the Spot Award – 2021 to 2025 (6X)',
    'Excellence Award – 18/06/21',
    'Beyond Performance Award – 22/04/21',
    'Star of Team Award - 01/11/21',
    'Excellence Award – 2021 to 2022 (3X)',
    'Beyond Performance Award - 08/12/23',
    'Beyond Performance Award - 08/12/24',
    "Leadership, Business Skills & Culture – TCS Portal - Jun'24",
    "Storytelling (Intermediate) – TCS Portal - Jun'24",
    "Figma for UX Design – TCS Portal - Apr'24",
    "Generative AI – TCS Portal - Feb'24",
    "Design Thinking - A Beginner's Guide – IDF - Apr'20",
    "Product Experience UX/UI Testing – TCS Portal - Sep'20",
    "Diploma in Multimedia and Animation – Jadavpur University - Aug'09"
  ];
}
