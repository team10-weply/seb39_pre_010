package com.team10.preproject.question.controller;

import com.team10.preproject.dto.SingleResponseDto;
import com.team10.preproject.oauth.PrincipalDetails;
import com.team10.preproject.question.dto.QuestionDto;
import com.team10.preproject.question.entity.Question;
import com.team10.preproject.question.mapper.QuestionMapper;
import com.team10.preproject.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuestionMapper mapper;

    @PostMapping
    public ResponseEntity questionWrite(@Valid @RequestBody QuestionDto.Post requestBody,
                                        @AuthenticationPrincipal PrincipalDetails principal){

        Question question = mapper.questionPostToQuestion(requestBody);
        Question createQuestion = questionService.questionwrite(question, principal.getMember());
        QuestionDto.Response response = mapper.questionToQuestionResponse(createQuestion);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity questionList(@PageableDefault(size=5, sort="id", direction = Sort.Direction.DESC)
                    Pageable pageable){

        Page<Question> questions = questionService.questionList(pageable);
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


    @PutMapping("/{question-id}")
    public ResponseEntity questionUpdate(@PathVariable("question-id") Long id,
                                         @RequestBody QuestionDto.Put requestBody){
        questionService.questionUpdate(id, mapper.questionPutToQuesiton(requestBody));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
