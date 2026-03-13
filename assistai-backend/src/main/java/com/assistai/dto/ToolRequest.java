package com.assistai.dto;

import lombok.*;
import java.util.Map;

/**
 * tool.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ToolRequest {
    private String toolName;
    private Map<String, Object> arguments;
    private String conversationId;
    private String messageId;
}
