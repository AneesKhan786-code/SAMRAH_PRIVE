export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        accent: '#d1d5db',
        surface: '#111827',
        muted: '#9ca3af'
      },
      boxShadow: {
        soft: '0 34px 100px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(15,23,42,0.88), rgba(15,23,42,0.28))',
        'nav-glow': 'radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 40%)'
      }
    }
  },
  plugins: []
};
