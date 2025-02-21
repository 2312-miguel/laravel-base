<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Modern Laravel Starter Kit

A production-ready Laravel starter kit featuring Docker, Inertia.js, React, and TypeScript. Built with modern development practices and tooling.

## ✨ Features

- 🐳 Docker-first development environment
- ⚛️ React 18 with TypeScript
- 🚀 Inertia.js for seamless SPA experience
- 🎨 TailwindCSS for styling
- 📦 Redis for caching and queues
- 🔒 Laravel Sanctum for API authentication
- 🔍 TypeScript strict mode enabled
- 📝 ESLint + Prettier configuration
- 🧪 PHPUnit for testing

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/laravel-base.git

# Enter the project directory
cd laravel-base

# Copy environment file
cp .env.example .env

# Start Docker containers
docker-compose up -d

# Install dependencies
docker compose exec app composer install
docker compose exec node npm install

# Generate application key
docker compose exec app php artisan key:generate

# Run migrations
docker compose exec app php artisan migrate
```

## 📚 Development Guide

### Available Commands

```bash
# Start development environment
docker-compose up -d

# Start Vite development server
docker compose exec node npm run dev

# Run tests
docker compose exec app php artisan test

# Format code
docker compose exec node npm run format

# Type check
docker compose exec node npm run type-check

# Lint
docker compose exec node npm run lint
```

### 🌐 Access URLs

- **Application:** http://localhost
- **API:** http://localhost/api
- **Vite Dev Server:** http://localhost:5173

### 📁 Project Structure

```
├── app/                  # PHP application code
│   ├── Http/            # Controllers, Middleware, etc.
│   └── Models/          # Eloquent models
├── resources/
│   ├── js/             # React/TypeScript code
│   │   ├── Components/ # Reusable React components
│   │   ├── Layouts/    # Page layouts
│   │   └── Pages/      # Page components
│   └── css/            # Global CSS and Tailwind
└── tests/              # Test files
```

### 🔧 Configuration

Key configuration files:
- `docker-compose.yml` - Docker services configuration
- `vite.config.js` - Frontend build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### 📦 Main Dependencies

**Backend:**
- Laravel 11.x
- Laravel Sanctum
- Laravel Pint
- Redis

**Frontend:**
- React 18
- TypeScript
- Inertia.js
- TailwindCSS
- Vite
- React Query
- Zustand

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

If you discover any security-related issues, please email security@example.com instead of using the issue tracker.
