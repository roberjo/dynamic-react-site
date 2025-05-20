# Dynamic React Site

A full-stack web application for managing and displaying investment products with dynamic projections and rate sheets.

## 🚀 Features

- User Authentication System
  - Registration and Login
  - Password Reset Functionality
  - Role-based Access Control

- Product Management
  - Admin CRUD Operations
  - Public Product Browsing
  - Advanced Search Capabilities

- Investment Tools
  - Dynamic Investment Projections
  - Customizable Time Frames
  - Starting Capital Calculations

- Document Management
  - Product Rate Sheet Downloads
  - Dynamic Document Generation

## 🛠️ Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- MobX for state management
- Dynamic React Components

### Backend
- Node.js with Express
- PostgreSQL for relational data
- DynamoDB for flexible data storage
- Polymorphic Data Models

### Infrastructure
- AWS for cloud hosting
- Serverless architecture
- Harness for deployment
- GitHub Actions for CI/CD

## 🏗️ Project Structure

```
dynamic-react-site/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js application
├── infrastructure/         # AWS and deployment configurations
├── docs/                   # Project documentation
└── scripts/               # Utility scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- AWS CLI configured
- Docker (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/dynamic-react-site.git
   cd dynamic-react-site
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start development servers:
   ```bash
   # Start frontend (from client directory)
   npm run dev

   # Start backend (from server directory)
   npm run dev
   ```

## 📚 Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [API Reference](docs/API_REFERENCE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing Guidelines](docs/CONTRIBUTORS.md)

## 🤝 Contributing

Please read our [Contributing Guidelines](docs/CONTRIBUTORS.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

Please report any security issues to security@yourdomain.com

## 📞 Support

For support, please open an issue in the GitHub repository or contact support@yourdomain.com 