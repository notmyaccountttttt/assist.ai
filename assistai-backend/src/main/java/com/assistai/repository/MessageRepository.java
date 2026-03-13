package com.assistai.repository;

import com.assistai.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO: Add custom query methods as needed
 * - findByConversationIdOrderByCreatedAtAsc(String conversationId)
 */
@Repository
public interface MessageRepository extends JpaRepository<Message, String> {
}
