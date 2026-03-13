# Tool System

Core tools registered in the `assist.ai` executor pipeline.

## `job_portal_search`
- **Description**: Wraps multi-provider aggregator querying.
- **Input Payload**: `{ "keywords": [], "locations": [], "portals": [] }`
- **Handler**: Model layer network request routines.

## `browser_automation`
- **Description**: Headless browser controller (Playwright).
- **Input Payload**: `{ "url": "string", "actions": [{"type": "string", "selector": "string"}] }`
- **Output**: JSON payload of requested DOM extrations or layout structures.

## `web_scraper`
- **Description**: Fast stateless DOM parsing.
- **Input Payload**: `{ "url": "string" }`
- **Handler**: Cheerio/Jsoup extraction targeting static content.

## `execution_sandbox`
- **Description**: Secure, isolated runtime for code generation tasks.
- **Input Payload**: `{ "language": "string", "script": "string" }`
- **Output**: Streamed or bulk stdout/stderr.
