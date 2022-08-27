package com.team10.preproject.member.entity;

import com.team10.preproject.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private  String email;

    @Column(length = 20, nullable = false)
    private  String name;

    @Column(length = 20, nullable = false)
    private  String password;

//    @Enumerated(value = EnumType.STRING)
//    @Column(length = 20, nullable = false)
//    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    public  Member(String email) { this.email = email; }

    public  Member(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

//    public enum  MemberStatus {
//        MEMBER_ACTIVE("활동중"),
//        MEMBER_SLEEP("휴면 상태"),
//        MEMBER_QUIT("탈퇴 상태");
//
//        @Getter
//        private String status;
//
//        MemberStatus(String status) { this.status = status; }
//    }
}

