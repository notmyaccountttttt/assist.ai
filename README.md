# assist.ai 

Core repository for the `assist.ai` execution engine.

This monorepo contains the following services:
- **web:** Next.js frontend application 
- **backend:** Spring Boot orchestration API
- **model:** Node.js/TF model runtime and agent execution layer

## Prerequisites
- Java 21 LTS
- Node.js >= 20.x
- Ollama (installed locally)

## Local Development Environment

1. **Install Dependencies**
   ```bash
   cp .env.example .env
   npm run install:all
   ```

2. **Initialize Models**
   Pull the required local models for development:
   ```bash
   npm run setup:ollama
   ```

3. **Start Services**
   We recommend running these in separate terminal windows/panes:
   ```bash
   # Model/Agent Runtime
   npm run dev:model

   # API Backend (Maven)
   cd assistai-backend && ./mvnw spring-boot:run

   # Web UI
   npm run dev:web
   ```

## Architecture Notes
For a detailed breakdown of the internal systems, refer to the `docs/` directory:
- [API Documentation](docs/API_DOCS.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [Agent Pipeline](docs/AGENT_PIPELINE.md)
- [Tooling System](docs/TOOL_SYSTEM.md)

## Build Validation
To verify the backend compiles cleanly:
```bash
cd assistai-backend
./mvnw clean verify
```
