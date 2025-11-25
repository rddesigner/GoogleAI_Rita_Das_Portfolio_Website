import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg py-20">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div class="md:w-1/3 flex justify-center">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-light-accent/50 dark:ring-dark-accent/50 animate-fade-in-up" style="animation-delay: 300ms;">
            <img src="https://mir-s3-cdn-cf.behance.net/user/284010,230/23f33282245223.563226a483751.jpg" alt="Rita Das" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="md:w-2/3 text-center md:text-left animate-fade-in-up">
          <h1 class="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
            Rita Das
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold text-light-accent dark:text-dark-accent mb-6">
            UX/UI Architect & Designer
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
            Strategic designer with 10+ years of experience delivering intuitive, scalable, and inclusive design solutions across web, mobile, and enterprise platforms.
          </p>
          <div class="flex justify-center md:justify-start items-center space-x-6 mb-8">
             <a href="https://www.linkedin.com/in/ritawebdesigner" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg>
             </a>
             <a href="https://www.behance.net/designerrita" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.344 7.825c-.283-1.026-.8-1.875-1.547-2.547-.746-.672-1.688-1.031-2.812-1.031h-9.938v15.531h9.938c1.125 0 2.063-.359 2.812-1.031.747-.672 1.266-1.521 1.547-2.547.281-1.026.422-2.261.422-3.704s-.141-2.678-.422-3.701zm-5.063 5.344c-.219.531-.563.953-1.031 1.266-.469.313-1.031.469-1.688.469h-4.594v-7.125h4.594c.656 0 1.219.156 1.688.469.469.313.813.734 1.031 1.266s.328 1.156.328 1.875-.109 1.344-.328 1.875zM1.656 2.25h4.969v4.969h-4.969v-4.969zm2.5 12.063h-5.031v4.938h5.031c.906 0 1.641-.281 2.188-.844.547-.563.828-1.281.828-2.156s-.281-1.594-.828-2.156c-.547-.563-1.281-.844-2.188-.844z"/></svg>
             </a>
             <a href="mailto:ritagkp@gmail.com" class="text-gray-500 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </a>
          </div>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="https://rita-das.tiiny.site/" target="_blank" rel="noopener noreferrer" class="px-8 py-3 bg-light-accent dark:bg-dark-accent text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
              View Resume
            </a>
            <a href="#portfolio" class="px-8 py-3 bg-light-card dark:bg-dark-card font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
              My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}