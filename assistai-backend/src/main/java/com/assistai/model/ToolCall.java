package com.assistai.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * ToolCall.
 */
@Entity
@Table(name = "tool_calls")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ToolCall {

    @Id
    private String id;

    @Column(name = "message_id")
    private String messageId;

    @Column(name = "tool_name")
    private String toolName;

    @Column(columnDefinition = "TEXT")
    private String arguments;

    @Column(columnDefinition = "TEXT")
    private String result;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "duration_ms")
    private Integer durationMs;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // TODO(team): Add @ManyToOne relationship to Message
    // TODO(team): Add @PrePersist lifecycle hook

    public enum Status {
        PENDING, SUCCESS, ERROR
    }
}
