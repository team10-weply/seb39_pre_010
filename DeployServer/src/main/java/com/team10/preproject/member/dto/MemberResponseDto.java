package com.team10.preproject.member.dto;

import com.team10.preproject.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String nickname;
    private String password;
//    private Member.MemberStatus memberStatus;
//
//    public String getMemberStatus() { return memberStatus.getStatus(); }
}