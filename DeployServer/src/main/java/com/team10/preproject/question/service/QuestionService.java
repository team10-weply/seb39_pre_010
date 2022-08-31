package com.team10.preproject.question.service;


import com.team10.preproject.member.entity.Member;
import com.team10.preproject.question.entity.Question;

import com.team10.preproject.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    // 글 작성
    @Transactional
    public void questionwrite(Question question, Member member){

        question.setMember(member);
        questionRepository.save(question);
    }

    // 질문 리스트
    public List<Question> questionList(){

        return questionRepository.findAll();
    }

    // 특정 질문 불러오기
    public Question questionView(Long id){

        return questionRepository.findById(id).get();
    }

    // 특정 질문 삭제하기

    public void questionDelete(Long id){

        questionRepository.deleteById(id);
    }

}
