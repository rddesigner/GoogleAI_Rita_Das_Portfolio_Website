import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-4 gradient-text">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto mb-12"></div>
      </div>

      <div class="max-w-4xl mx-auto text-lg text-text-secondary leading-relaxed text-center">
        <p class="mb-12">
          I am a strategic UX/UI Architect & Designer with 10+ years of experience delivering intuitive, scalable, and inclusive design solutions across web, mobile, and enterprise platforms. I specialize in crafting accessible, high-impact interfaces using Figma, Adobe XD, and Sketch, with a strong focus on user retention and engagement. I've led successful projects in B2B eCommerce, banking, real-time dashboards, and sentiment-driven designs. From WCAG-compliant interfaces to presales CX storytelling, I create user experiences that drive conversion and business growth.
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class AboutComponent {
}