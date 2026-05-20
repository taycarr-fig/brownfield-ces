/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        acme: {
          'action-primary':      'var(--color-action-primary)',
          'action-primary-dark': 'var(--color-action-primary-dark)',
          'action-danger':       'var(--color-action-danger)',
          'action-success':      'var(--color-action-success)',
          'action-ghost':        'var(--color-action-ghost-text)',
          'text-primary':        'var(--color-text-primary)',
          'text-secondary':      'var(--color-text-secondary)',
          'text-muted':          'var(--color-text-muted)',
          'text-heading':        'var(--color-text-heading)',
          'bg-surface':          'var(--color-bg-surface)',
          'bg-page':             'var(--color-bg-page)',
          'bg-accent':           'var(--color-bg-accent)',
          'border-default':      'var(--color-border-default)',
          'border-strong':       'var(--color-border-strong)',
        },
      },
    },
  },
  plugins: [],
}
