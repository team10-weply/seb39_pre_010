package com.team10.preproject.question.auth;


//import com.team10.preproject.question.entity.Member;
//import lombok.Getter;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.ArrayList;
//import java.util.Collection;
//
//@Getter
//public class PrincipalDetails implements UserDetails {
//
//    private Member member;
//
//    public PrincipalDetails(Member member) {
//        this.member = member;
//    }
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//
//        Collection<GrantedAuthority> collection = new ArrayList<>();
//        collection.add(new GrantedAuthority() {
//            @Override
//            public String getAuthority() {
//                return "ROLE_"+member.getRole();
//            }
//        });
//        return collection;
//    }
//
//    @Override
//    public String getPassword() {
//        return member.getPassword();
//    }
//
//    @Override
//    public String getUsername() {
//        return member.getName();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}
