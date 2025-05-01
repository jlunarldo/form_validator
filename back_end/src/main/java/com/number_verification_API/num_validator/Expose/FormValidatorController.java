package com.number_verification_API.num_validator.Expose;


import com.number_verification_API.num_validator.Model.Request.UserRequest;
import com.number_verification_API.num_validator.Model.Response.GeneralResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/form/")
@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class FormValidatorController {


    @PostMapping(value=("create"), produces = "application/json;charset=UTF-8")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<GeneralResponse> createUser ( @RequestBody UserRequest userRequest){
        String message="Creado con éxito";
        GeneralResponse generalResponse = new GeneralResponse();
        generalResponse.setMessage(message);
        return Mono.justOrEmpty(generalResponse);
    }

    @PostMapping(value=("sendEmail"), produces = "application/json;charset=UTF-8")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<GeneralResponse> sendUser ( @RequestBody UserRequest userRequest){
        String message="Creado con éxito";
        GeneralResponse generalResponse = new GeneralResponse();
        generalResponse.setMessage(message);
        return Mono.justOrEmpty(generalResponse);
    }
}
