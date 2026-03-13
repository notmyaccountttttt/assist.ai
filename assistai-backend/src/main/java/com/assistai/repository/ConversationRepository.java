package com.assistai.repository;

import com.assistai.model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO: Add custom query methods as needed
 * - findByUserIdOrderByUpdatedAtDesc(String userId)
 */
@Repository
public interface ConversationRepository extends JpaRepository<Conversation, String> {
}
