package com.team10.preproject.question.service;

import com.team10.preproject.question.entity.Member;
import com.team10.preproject.question.entity.RoleType;
import com.team10.preproject.question.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

//    @Autowired
//    private PasswordEncoder encoder;

//    @Transactional(readOnly = true)
//    public Member login(Member member){
//        return memberRepository.findByNameAndPassword(member.getName(), member.getPassword());
//    }

//    @Transactional
//    public void join(Member member){
//        String rawPassword = member.getPassword(); //1234 원문
//        String encPassword = encoder.encode(rawPassword); // 해쉬
//        member.setPassword(encPassword);
//        member.setRole(RoleType.USER);
//        memberRepository.save(member);
//    }

}
