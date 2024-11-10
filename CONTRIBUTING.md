# Contributing

Thank you for considering to contribute to git-alerts!

## Development Setup

1. Clone the repo:
```sh
git clone https://github.com/yourusername/git-alerts.git
cd git-alerts
```

2. Install dependencies:
```sh
bun install 
# or
npm install
```

3. Start development server:
```sh
bun run dev
# or
npm run dev
```

## Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style
- Use ESLint and Prettier configurations provided

### Git Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Pull Requests
- Ensure the PR description clearly describes the problem and solution
- Include relevant issue numbers if applicable
- Update documentation if needed
- Make sure all tests pass
- Keep PRs focused - one feature/fix per PR

### Browser Extension Specific
- Test changes in different browsers (Chrome, Firefox)
- Consider performance implications
- Follow browser extension best practices

## Testing

```sh
npm run test
```

## Building

```sh
npm run build
```

## Need Help?

Feel free to:
- Open an issue
- Start a discussion
- Ask questions in PR comments

## License

By contributing, you agree that your contributions will be licensed under the project's existing license.
