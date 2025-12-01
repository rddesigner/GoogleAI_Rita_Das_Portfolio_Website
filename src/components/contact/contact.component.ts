import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-20 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto"></div>
        <p class="max-w-2xl mx-auto text-lg text-text-secondary mt-8 mb-10 leading-relaxed">
          My inbox is always open. Whether you have a question, a project proposal, or just want to say hello, I'll get back to you! Feel free to reach out.
        </p>
        <a href="mailto:ritagkp@gmail.com" class="inline-block px-10 py-4 bg-gradient-to-r from-accent-pink to-accent-violet text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
          Say Hello
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ContactComponent {
}