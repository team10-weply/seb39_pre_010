package com.team10.preproject.question.controller;

//import com.team10.preproject.question.entity.Member;
//import com.team10.preproject.question.repository.MemberRepository;
//import com.team10.preproject.question.service.MemberService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//public class DummyControllerTest {
//
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @Autowired
//    private MemberService memberService;
//
//    @PostMapping("/join")
//    public ResponseEntity join(@RequestBody Member member){
//        System.out.println("Controller join 호출됨");
//        memberService.join(member);
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }


//    @PostMapping("/login")
//    public ResponseEntity loginMember(@RequestBody Member member, HttpSession session){
//        System.out.println("login 호출됨");
//        Member principal = memberService.login(member);
//
//        if(principal != null){
//            session.setAttribute("principal",principal);
//        }
//
//        return new ResponseEntity<>(HttpStatus.OK);
//
//    }
//}
