import { Component } from '@angular/core';

import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-mock-app-layout',
  templateUrl: './mock-app-layout.component.html',
  styleUrls: ['./mock-app-layout.component.scss'],
})
export class MockAppLayoutComponent {
  baseIpsum: LoremIpsum;
  anIpsum;
  anotherIpsum;

  constructor() {
    this.baseIpsum = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    this.anIpsum = this.baseIpsum.generateParagraphs(1);

    this.anotherIpsum = this.baseIpsum.generateParagraphs(1);
  }
}
