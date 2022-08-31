package com.team10.preproject.question.dto;


import com.team10.preproject.question.entity.Member;
import com.team10.preproject.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QuestionPostDto {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Member member;

    public Question toEntity() {
        Question question = Question.builder()
                .id(id)
                .title(title)
                .content(content)
                .member(member)
                .build();
        return question;
    }
}
