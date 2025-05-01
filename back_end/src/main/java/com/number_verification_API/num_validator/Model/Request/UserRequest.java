package com.number_verification_API.num_validator.Model.Request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;


@Getter
@Setter
@RequiredArgsConstructor
public class UserRequest {




    private String fullName;

    private String email;

    private Long phoneNumber;

    private String password;


}
