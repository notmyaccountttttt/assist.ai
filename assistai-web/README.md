# assistai-web — Frontend

> **Owner**: Your team  
> **Stack**: Next.js · TypeScript · Tailwind  
> **Architecture**: MVVM

## Quick Start

```bash
npx create-next-app@latest ./ --typescript --tailwind --app --src-dir --eslint
npm run dev
```

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Main chat page
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # Reusable UI primitives (Button, Avatar, etc.)
│   ├── chat/               # ChatPanel, MessageBubble, ChatInput, StreamingIndicator
│   └── layout/             # AppShell, Sidebar, ReasoningPanel
├── viewmodels/             # MVVM view models (React hooks)
│   ├── useChatViewModel.ts
│   ├── useConversationViewModel.ts
│   └── useAgentViewModel.ts
├── models/                 # TypeScript types/interfaces
│   ├── conversation.ts
│   └── agent.ts
├── services/
│   └── api/                # API clients (chatApi, agentApi, toolApi)
├── hooks/                  # Generic React hooks
├── utils/                  # Helpers
└── styles/                 # Global styles
```

## Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | SSE streaming chat |
| GET | `/api/history?userId=` | Conversation list |
| GET | `/api/history/{id}` | Messages in conversation |
| POST | `/api/tool` | Execute a tool |
| POST | `/api/agent/plan` | Create agent plan |
| GET | `/api/tools` | List available tools |

## UI Layout

Three-panel Kimi-style layout:
- **Left sidebar** — conversation history
- **Main panel** — streaming chat
- **Right panel** — agent reasoning trace + tool usage
