# Agent Pipeline

## Overview

The `assist.ai` agent pipeline processes intent matching and task execution in a directed graph. 

### Data Flow

1. **Intent Parser**: Raw inbound messages stream into a classifier (via TF Lite / qwen2). Identified tasks branch away from the standard chat stream.
2. **Planner**: Evaluates the prompt and state, emitting an N-step `execution_plan` payload.
3. **Scheduler**: Jobs that dictate a temporal or conditional requirement get pushed to the DB schedule queue instead of the immediate executor.
4. **Executor**: Handles iterating over the task steps, transforming the logical descriptions into discrete strict-JSON payloads for tool consumption.
5. **Evaluating Output**: Tool stdout/stderr is processed by the reflector node, determining progression or error loops.

## Integrations

- Planner Node: Uses `phi3:mini` for reasoning traces.
- Executor Node: Dispatcher logic mapping to defined tools.
- DB Layer: All state transitions are flushed to the `tasks` and `task_steps` tables for resume-ability.
