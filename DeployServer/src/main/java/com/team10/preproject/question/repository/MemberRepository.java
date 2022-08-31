package com.team10.preproject.question.repository;

import com.team10.preproject.question.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    //SELECT * FROM member WHERE name = ? AND password = ?;
//    Member findByNameAndPassword(String name, String password);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
}
