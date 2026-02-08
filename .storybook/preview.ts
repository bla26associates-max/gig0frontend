import type { Preview } from '@storybook/react'
import '../src/index.css'; // This connects the Tailwind v4 OKLCH colors

const preview: Preview = {
  parameters: {
// Add this to ensure mobile-first testing is the default
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
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;