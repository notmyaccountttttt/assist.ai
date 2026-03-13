package com.assistai.dto;

import lombok.*;

/**
 * chat.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ChatRequest {
    private String conversationId;
    private String userId;
    private String message;
    private boolean useReasoning;
}
