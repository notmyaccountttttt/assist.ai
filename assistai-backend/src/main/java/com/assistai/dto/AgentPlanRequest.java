package com.assistai.dto;

import lombok.*;

/**
 * agent.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class AgentPlanRequest {
    private String conversationId;
    private String query;
    private String context;
}
