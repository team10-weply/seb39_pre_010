package com.team10.preproject.question.auth;

//import com.team10.preproject.question.entity.Member;
//import com.team10.preproject.question.repository.MemberRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class PrincipalDetailsService implements UserDetailsService{
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//        Member principal = memberRepository.findByName(name)
//                        .orElseThrow(() -> {
//                            return new UsernameNotFoundException("해당 사용자를 찾을 수 없습니다.");
//                        });
//        System.out.println("name : " + name);
//        return new PrincipalDetails(principal);
//    }
//}
