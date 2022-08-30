package com.team10.preproject.member.dto;

import com.team10.preproject.member.entity.Member;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPatchDto {
    private long memberId;

    @NotBlank(message = "Name cannot be null")
    private String nickname;

    @NotBlank(message = "Password cannot be null")
    @Length(min=8, message = "Passwords must be at least 8 characters long.")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
            message = "password must be 8-20 characters long and contain one uppercase and one lowercase and one special character.")
    private String password;

//    private Member.MemberStatus memberStatus;

    public void setMemberId(long memberId) { this.memberId = memberId; }
}
