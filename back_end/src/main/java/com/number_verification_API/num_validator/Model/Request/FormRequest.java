package com.number_verification_API.num_validator.Model.Request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class FormRequest {

    private String fullName;

    private String email;
}
