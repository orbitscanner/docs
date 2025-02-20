# Orbit Documentation

This repository contains the official documentation for Orbit, security scanning and automation platform. The documentation is built using [Starlight](https://starlight.astro.build), a documentation framework powered by Astro.

📚 **View the live documentation at [orbitscanner.io](https://orbitscanner.io)**

## 🚀 Quick Start

```bash
# Download the Orbit executable
wget https://github.com/orbitscanner/orbit/releases/latest/download/orbit

# Make it executable
chmod +x orbit

# Set your API key (must be 32 characters)
export ORBIT_API_KEY=$(openssl rand -base64 24 | tr -d '=+/[:space:]' | cut -c1-32)

# Start Orbit
./orbit serve

# Access the web interface at
http://localhost:8090
```

That's it! Orbit is now running and you can access the web interface in your browser.

## 📖 Documentation Structure

```
docs/
├── src/
│   ├── content/docs/    # Documentation content (MDX files)
│   ├── components/      # Custom components
│   └── styles/          # CSS styles
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or later)
- pnpm (v7 or later)

### Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## 🎨 Customization

The documentation uses Tailwind CSS for styling and can be customized through:
- `src/styles/custom.css` - Custom CSS styles
- `tailwind.config.mjs` - Tailwind configuration
- `astro.config.mjs` - Starlight theme configuration

## 🤝 Contributing

We welcome contributions to improve the documentation! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This documentation is brought to you by [Black Hills Information Security](https://www.blackhillsinfosec.com).

## 💬 Community

Join our community on [Discord](https://discord.gg/BHIS) for support and discussions.
