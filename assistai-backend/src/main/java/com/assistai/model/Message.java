package com.assistai.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * Message.
 */
@Entity
@Table(name = "messages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Message {

    @Id
    private String id;

    // TODO(team): Add @ManyToOne relationship to Conversation
    @Column(name = "conversation_id")
    private String conversationId;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String model;

    @Column(name = "token_count")
    private Integer tokenCount;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // TODO(team): Add @OneToMany relationship to ToolCall
    // TODO(team): Add @PrePersist lifecycle hook

    public enum Role {
        USER, ASSISTANT, SYSTEM, TOOL
    }
}
