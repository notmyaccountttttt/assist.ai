package com.assistai.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * AgentMemory.
 */
@Entity
@Table(name = "agent_memory")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class AgentMemory {

    @Id
    private String id;

    @Column(name = "conversation_id")
    private String conversationId;

    @Enumerated(EnumType.STRING)
    @Column(name = "memory_type")
    private MemoryType memoryType;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(columnDefinition = "TEXT")
    private String metadata;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // TODO(team): Add @PrePersist lifecycle hook

    public enum MemoryType {
        SHORT_TERM, LONG_TERM, SUMMARY
    }
}
