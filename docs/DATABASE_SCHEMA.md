# Database Schema

Relational schema supporting the `assist.ai` platform. Migrations are managed via Flyway.

### `users`
- `id` (VARCHAR PK)
- `username` (VARCHAR UNIQUE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### `conversations`
- `id` (VARCHAR PK)
- `user_id` (VARCHAR FK -> users.id)
- `title` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### `messages`
- `id` (VARCHAR PK)
- `conversation_id` (VARCHAR FK -> conversations.id)
- `role` (VARCHAR)
- `content` (TEXT)
- `task_id` (VARCHAR FK -> tasks.id)
- `created_at` (TIMESTAMP)

### `tasks`
Tracks asynchronous execution jobs.
- `id` (VARCHAR PK)
- `user_id` (VARCHAR FK -> users.id)
- `conversation_id` (VARCHAR FK -> conversations.id)
- `category` (VARCHAR)
- `task_description` (TEXT)
- `status` (VARCHAR) - PLANNED, EXECUTING, PAUSED, COMPLETED, FAILED
- `progress_percent` (INTEGER)
- `result_summary` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### `task_steps`
- `id` (VARCHAR PK)
- `task_id` (VARCHAR FK -> tasks.id)
- `step_order` (INTEGER)
- `action` (VARCHAR)
- `description` (TEXT)
- `status` (VARCHAR)
- `result_data` (TEXT)
- `started_at` (TIMESTAMP)
- `completed_at` (TIMESTAMP)

### `tool_calls`
- `id` (VARCHAR PK)
- `task_step_id` (VARCHAR FK -> task_steps.id)
- `message_id` (VARCHAR FK -> messages.id)
- `tool_name` (VARCHAR)
- `arguments` (TEXT)
- `result` (TEXT)
- `status` (VARCHAR)
- `duration_ms` (INTEGER)
- `created_at` (TIMESTAMP)

### `schedules`
- `id` (VARCHAR PK)
- `task_id` (VARCHAR FK -> tasks.id)
- `schedule_type` (VARCHAR)
- `run_at` (TIMESTAMP)
- `cron_expression` (VARCHAR)
- `condition_expr` (TEXT)
- `status` (VARCHAR)
- `created_at` (TIMESTAMP)

### `agent_memory`
- `id` (VARCHAR PK)
- `user_id` (VARCHAR FK -> users.id)
- `memory_type` (VARCHAR)
- `content` (TEXT)
- `metadata` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)
