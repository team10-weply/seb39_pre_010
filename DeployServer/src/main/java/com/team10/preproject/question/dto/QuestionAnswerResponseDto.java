package com.team10.preproject.question.dto;

import com.team10.preproject.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionAnswerResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long memberId;
    private String nickname;
    private Long answerId;
    private String comment;
    private LocalDateTime answerCreatedAt;
    private LocalDateTime answerUpdatedAt;
    private Long answerMemberId;
    private String answerNickname;

    public QuestionAnswerResponseDto(Question question){
        this.questionId = question.getQuestionId();
        this.title = question.getTitle();
        this.content = question.getContent();
        this.createdAt = question.getCreatedAt();
        this.updatedAt = question.getUpdatedAt();
        this.memberId = question.getMember().getMemberId();
        this.nickname = question.getMember().getNickname();
        this.answerId = question.getAnswer().get(questionId.intValue()).getAnswerId();
        this.comment = question.getAnswer().get(questionId.intValue()).getComment();
        this.answerCreatedAt = question.getAnswer().get(questionId.intValue()).getCreatedAt();
        this.answerUpdatedAt = question.getAnswer().get(questionId.intValue()).getUpdatedAt();
        this.answerMemberId = question.getAnswer().get(questionId.intValue()).getMember().getMemberId();
        this.answerNickname = question.getAnswer().get(questionId.intValue()).getMember().getNickname();
    }
}
