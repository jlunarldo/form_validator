package com.number_verification_API.num_validator.Business.Interactor;


import com.number_verification_API.num_validator.Business.Service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EmailRecord {
    @Autowired
    private EmailService emailService;

    public void sendASimpleMessage(String to, String subject, String text){
        emailService.sendASimpleMessage(to, subject, text);
    }
}
