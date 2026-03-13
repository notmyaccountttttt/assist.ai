# API Documentation (v1)

Base Path: `/api/v1`

## Chat API

### `POST /api/v1/chat`
Main entry point for user interaction. Handles both direct replies and complex task planning.

**Request payload:**
```json
{
  "user_id": "string",
  "conversation_id": "string",
  "message": "string",
  "context": "object",
  "attachments": "array"
}
```

**Response:**
```json
{
  "assistant_reply": "string",
  "task_detected": "boolean",
  "task_id": "string",
  "execution_plan": "array",
  "tool_calls": "array"
}
```

## Task Automation 

### `POST /api/v1/tasks`
Create a new automated task asynchronously.

**Request:**
```json
{
  "user_id": "string",
  "task": "string",
  "category": "string"
}
```

**Response:** Returns a `task_id` and the initial planned steps.

### `POST /api/v1/tasks/{task_id}/execute`
Trigger an existing planned workflow. 

### `GET /api/v1/tasks/{task_id}`
Get the current status of a running or completed task.

## Scheduler

### `POST /api/v1/schedule`
Schedule a task for delayed or recurring execution.

**Request:**
```json
{
  "user_id": "string",
  "task": "string",
  "schedule_time": "ISO8601 string",
  "cron_expression": "string (optional)",
  "condition": "string (optional)"
}
```

## Tools

### `POST /api/v1/tools/run`
Direct diagnostic endpoint for invoking a target tool.

**Request:**
```json
{
  "tool_name": "string",
  "arguments": "object",
  "task_id": "string"
}
```
