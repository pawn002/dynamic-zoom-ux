import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { MockAppLayoutComponent } from './mock-app-layout.component';

const meta: Meta<MockAppLayoutComponent> = {
  title: 'Main/Mock App Layout',
  component: MockAppLayoutComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<MockAppLayoutComponent>;

export const Typical: Story = {
  args: {},
};
