package com.number_verification_API.num_validator.Expose;


import com.number_verification_API.num_validator.Business.Interactor.EmailRecord;
import com.number_verification_API.num_validator.Model.Request.FormRequest;
import com.number_verification_API.num_validator.Model.Request.UserRequest;
import com.number_verification_API.num_validator.Model.Response.GeneralResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/form/")
@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class FormValidatorController {

    @Autowired
    private EmailRecord emailRecord;

    /*@PostMapping(value=("create"), produces = "application/json;charset=UTF-8")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<GeneralResponse> createUser ( @RequestBody UserRequest userRequest){
        String message="Creado con éxito";
        GeneralResponse generalResponse = new GeneralResponse();
        generalResponse.setMessage(message);
        return Mono.justOrEmpty(generalResponse);
    }
*/
    @PostMapping(value=("recvEmail"), produces = "application/json;charset=UTF-8")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<GeneralResponse> sendUser ( @RequestBody FormRequest formRequest){
        String message="Creado con éxito";
        GeneralResponse generalResponse = new GeneralResponse();
        generalResponse.setMessage(message);
        return Mono.justOrEmpty(generalResponse);
    }
    @GetMapping(value=("sendEmail"), produces = "application/json;charset=UTF-8")
    @ResponseStatus(HttpStatus.OK)
    public Mono<String> sendEmailSimple (){
        System.out.print("Into here");
        String message="se ha enviado el mail con éxito";
        emailRecord.sendASimpleMessage("luna4053@gmail.com","Testing","send a simple message to test our program ");
        return Mono.justOrEmpty(message);
    }
}

