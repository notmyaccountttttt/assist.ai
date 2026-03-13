package com.assistai.dto;

import lombok.*;

/**
 * chat.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ChatResponse {
    private String type;
    private String content;
    private String conversationId;
    private String messageId;
    private String model;
}
