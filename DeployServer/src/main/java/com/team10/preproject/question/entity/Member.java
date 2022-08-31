package com.team10.preproject.question.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(nullable = false, length = 50)
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType role;

//    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

//    @UpdateTimestamp // UPDATE 시 자동으로 값을 채워줌
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
}
