package com.team10.preproject.question.dto;

import com.team10.preproject.member.entity.Member;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;


public class QuestionDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private Long id;

        @NotBlank(message = "제목은 공백이 불가능 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 불가능 합니다.")
        private String content;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private Member member;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Put {
        private Long id;

        @NotBlank(message = "제목은 공백이 불가능 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 불가능 합니다.")
        private String content;
    }

    @Data
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String title;
        private String content;
        public Member member;
    }
}
