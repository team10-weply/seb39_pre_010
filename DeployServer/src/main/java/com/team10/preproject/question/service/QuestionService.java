package com.team10.preproject.question.service;


import com.team10.preproject.exception.BusinessLogicException;
import com.team10.preproject.exception.ExceptionCode;
import com.team10.preproject.member.entity.Member;
import com.team10.preproject.question.dto.QuestionDto;
import com.team10.preproject.question.entity.Question;

import com.team10.preproject.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.validation.Valid;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    // 글 작성
    @Transactional
    public Question questionwrite(Question question, Member member){

        question.setMember(member);
        return questionRepository.save(question);
    }

    // 질문 리스트
    @Transactional(readOnly = true)
    public Page<Question> questionList(Pageable pageable){

        return questionRepository.findAll(pageable);
    }

    // 특정 질문 불러오기
    @Transactional(readOnly = true)
    public Question questionView(Long id){
        Optional<Question> optionalQuestion =
                questionRepository.findById(id);
        Question question =
                optionalQuestion.orElseThrow(() -> {
                    return new BusinessLogicException(ExceptionCode.NoSuchElementException);
                });
        return question;
    }

    @Transactional
    public Question questionUpdate(long id,Question requestQuestion){
        Question question = questionRepository.findById(id)
                .orElseThrow(() ->{
                    return new IllegalArgumentException("글 찾기 실패 : 아이디를 찾을 수 없습니다.");
                });
        question.setTitle(requestQuestion.getTitle());
        question.setContent(requestQuestion.getContent());
        return questionRepository.save(question);
    }

    // 특정 질문 삭제하기
    @Transactional
    public void questionDelete(Long id){

        questionRepository.deleteById(id);
    }

}
