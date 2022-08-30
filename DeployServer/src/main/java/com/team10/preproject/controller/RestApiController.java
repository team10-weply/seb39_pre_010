package com.team10.preproject.controller;


import com.team10.preproject.member.entity.Member;
import com.team10.preproject.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class RestApiController {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/info")
    public String info() {
        return "<h1>info</h1>";
    }

    @GetMapping("/admin")
    public @ResponseBody String admin() {
        return "admin";
    }

    @GetMapping("/manager")
    public @ResponseBody String manager() {
        return "manager";
    }

    @PostMapping("/token")
    public String token() {
        return "<h1>token</h1>";
    }

    @GetMapping("/logout")
    public @ResponseBody String logout() {
        return "logout";
    }

//    @PostMapping("/join")
//    public String join(@RequestBody Member member) {
//        member.setPassword(bCryptPasswordEncoder.encode(member.getPassword()));
//        member.setRoles("ROLE_USER");
//        memberRepository.save(member);
//        return "회원 가입 완료";
//    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/admintools")
    public @ResponseBody String admintools() {
        return "admintools";
    }

    @PreAuthorize("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    @GetMapping("/data")
    public @ResponseBody String data() {
        return "data";
    }

}