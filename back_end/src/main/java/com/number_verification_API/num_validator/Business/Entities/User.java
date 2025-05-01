package com.number_verification_API.num_validator.Business.Entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;


@Getter
@Setter
@RequiredArgsConstructor
public class User {


    private Long id_client;

    private String fullName;

    private String email;

    private Long phoneNumber;

    private Integer flag;

    private Timestamp registerDate;

}
