package com.team10.preproject.member.repository;

import com.team10.preproject.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    public Member findByEmail(String email);

    public Member findByUsername(String username);
}
