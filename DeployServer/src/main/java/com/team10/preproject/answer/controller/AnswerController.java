package com.team10.preproject.answer.controller;


import com.team10.preproject.answer.entity.Answer;
import com.team10.preproject.answer.service.AnswerService;
import com.team10.preproject.oauth.PrincipalDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping("/api/v1/questions/{question-id}/answer")
    public ResponseEntity answerWrite(@PathVariable("question-id") Long questionId, @RequestBody Answer requestAnswer,
                                      @AuthenticationPrincipal PrincipalDetails principal){

        Answer answer = answerService.anserWrite(principal.getMember(), questionId ,requestAnswer);
        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }

}
