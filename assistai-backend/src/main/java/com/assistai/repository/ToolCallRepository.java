package com.assistai.repository;

import com.assistai.model.ToolCall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO: Add custom query methods as needed
 * - findByMessageId(String messageId)
 */
@Repository
public interface ToolCallRepository extends JpaRepository<ToolCall, String> {
}
