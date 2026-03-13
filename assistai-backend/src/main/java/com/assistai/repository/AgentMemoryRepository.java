package com.assistai.repository;

import com.assistai.model.AgentMemory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO: Add custom query methods as needed
 * - findByConversationIdOrderByCreatedAtDesc(String conversationId)
 * - findByMemoryType(AgentMemory.MemoryType memoryType)
 */
@Repository
public interface AgentMemoryRepository extends JpaRepository<AgentMemory, String> {
}
