package com.team10.preproject.question.mapper;

import com.team10.preproject.member.entity.Member;
import com.team10.preproject.question.dto.QuestionDto;
import com.team10.preproject.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-01T06:59:45+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.11 (AdoptOpenJDK)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostToQuestion(QuestionDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.id( requestBody.getId() );
        question.title( requestBody.getTitle() );
        question.content( requestBody.getContent() );
        question.createdAt( requestBody.getCreatedAt() );
        question.updatedAt( requestBody.getUpdatedAt() );
        question.member( requestBody.getMember() );

        return question.build();
    }

    @Override
    public Question questionPutToQuesiton(QuestionDto.Put requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.id( requestBody.getId() );
        question.title( requestBody.getTitle() );
        question.content( requestBody.getContent() );

        return question.build();
    }

    @Override
    public QuestionDto.Response questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        Long id = null;
        String title = null;
        String content = null;
        Member member = null;

        id = question.getId();
        title = question.getTitle();
        content = question.getContent();
        member = question.getMember();

        QuestionDto.Response response = new QuestionDto.Response( id, title, content, member );

        return response;
    }

    @Override
    public List<QuestionDto.Response> questionToQuestionResponses(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponse( question ) );
        }

        return list;
    }
}
