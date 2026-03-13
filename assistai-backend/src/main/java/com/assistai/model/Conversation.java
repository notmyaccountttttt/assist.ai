package com.assistai.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Conversation.
 */
@Entity
@Table(name = "conversations")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Conversation {

    @Id
    private String id;

    // TODO(team): Add @ManyToOne relationship to User
    @Column(name = "user_id")
    private String userId;

    private String title;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // TODO(team): Add @OneToMany relationship to Messages
    // TODO(team): Add @PrePersist / @PreUpdate lifecycle hooks
}
