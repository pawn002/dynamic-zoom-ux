import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ImageContainerComponent } from './image-container.component';

const meta: Meta<ImageContainerComponent> = {
  title: 'Main/Image Container',
  component: ImageContainerComponent,
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
type Story = StoryObj<ImageContainerComponent>;

export const Typical: Story = {
  render: () => ({
    props: {
      src: '/logo_w3c.png',
      alt: 'my image',
    },
  }),
  args: {},
};
