package com.team10.preproject.question.controller;


import com.team10.preproject.member.entity.Member;
import com.team10.preproject.oauth.PrincipalDetails;
import com.team10.preproject.question.entity.Question;
import com.team10.preproject.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;


//    @PostMapping
//    public ResponseEntity questionWrite(@RequestBody Question question,
//                                        @AuthenticationPrincipal PrincipalDetails principal){
//        questionService.questionwrite(question, principal.getMember());
//        return new ResponseEntity<>(question, HttpStatus.OK);
//    }
//    @PostMapping
//    public ResponseEntity questionWrite(@RequestBody Question question,
//                                        HttpSession session){
//
//        Member sessionMember = HttpSessionUtils
//    }

    @PostMapping
    public ResponseEntity questionWrite(@RequestBody Question question,
                                        @AuthenticationPrincipal PrincipalDetails principal){
        questionService.questionwrite(question, principal.getMember());
        return new ResponseEntity<>(question, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity questionList(){

        List<Question> questions = questionService.questionList();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity questionView(@PathVariable("question-id") Long id){

        Question question = questionService.questionView(id);

        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity questionDelete(@PathVariable("question-id") Long id){

        questionService.questionDelete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
