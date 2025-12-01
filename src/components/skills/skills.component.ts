import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 gradient-text">My Skills</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
      </div>

      <div class="max-w-6xl mx-auto space-y-12">
        @for(category of skillData; track category.name) {
          <div>
            <h3 class="text-2xl font-bold text-center mb-6 text-text-primary">{{ category.name }}</h3>
            <div class="flex flex-wrap justify-center gap-3">
              @for(skill of category.skills; track skill) {
                <span class="px-4 py-2 bg-secondary rounded-md shadow-md text-text-secondary font-medium">
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SkillsComponent {
  skillData: SkillCategory[] = [
    {
      name: 'UX Research & Strategy',
      skills: [
        'User Research', 'Heuristic Evaluation', 'Usability Testing', 'Guerilla Testing',
        'Heatmap Analysis', 'Card Sorting', 'Information Architecture', 'Journey Mapping',
        'Empathy Mapping', 'Persona Development', 'Task Flows / User Flows', 'Lean UX',
        'JTBD Framework', 'Mental Model'
      ]
    },
    {
      name: 'Design & Prototyping',
      skills: [
        'Interaction Design (IxD)', 'Prototyping (Lo-Fi / Hi-Fi)', 'Wireframing', 'Visual Design',
        'Storyboarding', 'Mood Boards', 'Brand Guidelines', 'Design Principles',
        'Grid Systems', 'Inclusive Design', 'Adaptive Interfaces', 'Design Systems',
        'Dark UX', 'Skeuomorphism', 'Branding & Logo'
      ]
    },
    {
      name: 'Tools & Software',
      skills: [
        'Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Cloud', 'InVision', 'Zeplin', 'Hotjar',
        'Balsamiq', 'UXPin', 'FigJam / Miro', 'Azure Board', 'Jira', 'Canva/Vectr', 'Photoshop',
        'Adobe Illustrator'
      ]
    },
    {
      name: 'Technical & Other',
      skills: [
        'Generative AI', 'IoT-Informed UX', 'HTML5/CSS3', 'Bootstrap 4', 'Tailwind CSS',
        'Responsive Design', 'Accessibility (WCAG, ARIA)', 'A/B Testing', 'SVG Creation',
        'Color Blind Designing', 'Presales PPT', 'Sales Brochure', 'Ideation'
      ]
    }
  ];
}