import type { Preview } from '@storybook/react'
import '../src/index.css'; // This connects the Tailwind v4 OKLCH colors

const preview: Preview = {
  parameters: {
    // Standardizing the background to match the Philadelphia StaffHub 'bg-background'
    backgrounds: {
      default: 'staffhub-light',
      values: [
        { name: 'staffhub-light', value: 'oklch(0.96 0.005 80)' },
        { name: 'staffhub-dark', value: 'oklch(0.20 0.01 250)' },
      ],
    },
    // Mobile-first testing as the default for high-fidelity review
    viewport: {
      defaultViewport: 'mobile1', 
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;