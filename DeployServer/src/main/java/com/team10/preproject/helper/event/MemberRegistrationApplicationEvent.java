package com.team10.preproject.helper.event;

import com.team10.preproject.member.entity.Member;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class MemberRegistrationApplicationEvent extends ApplicationEvent {
    private Member member;
    public MemberRegistrationApplicationEvent(Object source, Member member) {
        super(source);
        this.member = member;
    }
}
