
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-behance-showcase',
  template: `
    <section id="behance" class="py-20 bg-secondary/30">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          
          <div class="md:w-1/3 flex justify-center p-4 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-violet opacity-30 rounded-full" style="filter: blur(40px);"></div>
            <img src="src/assets/logos/behance.svg" alt="Behance Logo" class="w-32 h-32 relative z-10 text-text-primary" />
          </div>

          <div class="md:w-2/3">
            <div class="text-center md:text-left mb-8 md:mb-0">
              <h2 class="text-4xl font-bold mb-4 gradient-text">Behance Showcase</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto md:mx-0"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              @for(project of projects; track project.url) {
                <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="block bg-primary p-4 rounded-lg shadow-lg hover:shadow-highlight/40 transition-all duration-300 transform hover:-translate-y-1 group">
                  <img [src]="'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(project.url) + '?w=400&h=300'" [alt]="project.title" class="w-full h-32 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105">
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
export class BehanceShowcaseComponent {
  projects: Project[] = [
    { title: 'UtsavWale', url: 'https://www.behance.net/gallery/239612813/UtsavWale-An-unique-way-to-create-wedding-memory', description: 'Unique way to create memories.' },
    { title: 'FootLoose', url: 'https://www.behance.net/gallery/239253249/Footloose-Your-personal-travel-Genie', description: 'Your own personal travel genie.' },
    { title: 'FlyEasy', url: 'https://www.behance.net/gallery/238839733/User-centric-app-for-easy-airport-services-assistance', description: 'User-centric airport assistance app.' },
    { title: 'MakeMyTrip', url: 'https://www.behance.net/gallery/235963919/MMT-Personal-Redesign-Ideation', description: 'Personal redesign ideation for MMT.' },
    { title: 'Cabber', url: 'https://www.behance.net/gallery/52856529/Cabber-Taxi-Booking-App', description: 'A sleek taxi booking app.' },
    { title: 'WooBabble', url: 'https://www.behance.net/gallery/52957571/Woobabble-is-a-location-based-dating-application', description: 'A location-based dating application.' },
    { title: 'Tata Steel SOS', url: 'https://www.behance.net/gallery/235965217/MNC-Steel-Manufacturer-Critical-Outage-Application', description: 'Critical outage reporting application.' },
    { title: 'Rabobank Dashboard', url: 'https://www.behance.net/gallery/235967683/MNC-Financial-Bank-Transaction-Audit-Interface', description: 'Financial bank transaction audit.' },
    { title: 'Rabobank Privilege App', url: 'https://www.behance.net/gallery/235968269/MNC-Financial-Bank-App-Modernization', description: 'Financial bank app modernization.' },
    { title: 'Qlikchain Properties', url: 'https://www.behance.net/gallery/237770831/QlikChain-Properties', description: 'Secure blockchain property searching.' },
    { title: 'Rabobank Mobile App', url: 'https://www.behance.net/gallery/235966003/MNC-Financial-Bank-Android-App-Conceptualization', description: 'Bank android app conceptualization.' },
    { title: 'AVFuzon Video Edit App', url: 'https://www.behance.net/gallery/53024623/AVFuzon-It-is-a-video-editing-iOS-application', description: 'A video editing iOS application.' },
    { title: 'TalentChain Hiring', url: 'https://www.behance.net/gallery/237770491/TalentChain-Blockchain-project', description: 'Blockchain project for hiring talent.' },
  ];
  encodeURIComponent = encodeURIComponent;
}