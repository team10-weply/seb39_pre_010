package com.team10.preproject.question.mapper;

import com.team10.preproject.question.dto.QuestionDto;
import com.team10.preproject.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post requestBody);
    Question questionPutToQuesiton(QuestionDto.Put requestBody);
    QuestionDto.Response questionToQuestionResponse(Question question);
    List<QuestionDto.Response> questionToQuestionResponses(List<Question> questions);
}
