# Contributing Guidelines

Thank you for your interest in contributing to the Dynamic React Site! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git
- PostgreSQL
- AWS CLI (for deployment)
- Docker (optional)

### Development Environment Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/dynamic-react-site.git
   cd dynamic-react-site
   ```

3. Install dependencies:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Start development servers:
   ```bash
   # Start frontend (from client directory)
   npm run dev

   # Start backend (from server directory)
   npm run dev
   ```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes
- `release/*` - Release preparation

### Git Workflow

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```

4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

### Pull Request Process

1. Update documentation
2. Add tests for new features
3. Ensure all tests pass
4. Update the changelog
5. Request review from maintainers

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful comments
- Use meaningful variable names

### React Components

- Use functional components
- Implement proper prop types
- Use React hooks appropriately
- Follow component structure guidelines

### Backend

- Follow REST API best practices
- Implement proper error handling
- Use appropriate HTTP status codes
- Write comprehensive API documentation

## Testing

### Frontend Testing

```bash
# Run frontend tests
cd client
npm run test

# Run frontend tests with coverage
npm run test:coverage
```

### Backend Testing

```bash
# Run backend tests
cd server
npm run test

# Run backend tests with coverage
npm run test:coverage
```

### E2E Testing

```bash
# Run E2E tests
npm run test:e2e
```

## Documentation

### Code Documentation

- Use JSDoc comments for functions
- Document complex algorithms
- Explain non-obvious code
- Keep documentation up to date

### API Documentation

- Document all API endpoints
- Include request/response examples
- Document error cases
- Keep API documentation in sync with code

## Review Process

1. Code review by at least one maintainer
2. All tests must pass
3. Documentation must be updated
4. No merge conflicts
5. Follows coding standards

## Release Process

1. Update version numbers
2. Update changelog
3. Create release branch
4. Run full test suite
5. Deploy to staging
6. Verify functionality
7. Deploy to production

## Support

### Getting Help

- GitHub Issues
- Slack channel
- Email support

### Reporting Bugs

1. Use the bug report template
2. Include steps to reproduce
3. Include expected behavior
4. Include actual behavior
5. Include environment details

### Feature Requests

1. Use the feature request template
2. Describe the feature
3. Explain the use case
4. Consider alternatives
5. Include mockups if applicable

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE). 