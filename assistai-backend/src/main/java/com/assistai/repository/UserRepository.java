package com.assistai.repository;

import com.assistai.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO: Add custom query methods as needed
 * - findByUsername(String username)
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
