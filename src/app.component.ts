
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { AwardsComponent } from './components/awards/awards.component';
import { UxCaseStudyComponent } from './components/ux-case-study/ux-case-study.component';
import { BehanceShowcaseComponent } from './components/behance-showcase/behance-showcase.component';
import { GoogleAiComponent } from './components/google-ai/google-ai.component';
import { FigmaShowcaseComponent } from './components/figma-showcase/figma-showcase.component';
import { LiveWebsitesComponent } from './components/live-websites/live-websites.component';
import { CreativeGalleryComponent } from './components/creative-gallery/creative-gallery.component';
import { EmailTemplatesComponent } from './components/email-templates/email-templates.component';
import { GithubArtifactsComponent } from './components/github-artifacts/github-artifacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    UxCaseStudyComponent,
    BehanceShowcaseComponent,
    GoogleAiComponent,
    FigmaShowcaseComponent,
    LiveWebsitesComponent,
    CreativeGalleryComponent,
    EmailTemplatesComponent,
    GithubArtifactsComponent,
    AwardsComponent,
    ContactComponent,
    FooterComponent
  ],
})
export class AppComponent {

}
