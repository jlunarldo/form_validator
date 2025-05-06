package com.number_verification_API.num_validator.Business.Service;

import com.number_verification_API.num_validator.Model.Request.FormRequest;
import com.number_verification_API.num_validator.Model.Response.GeneralResponse;
import com.number_verification_API.num_validator.Model.Response.GetResponse;
import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public interface EmailService {

    public void sendSimpleMessage(String email, String msg);

    public void sendASimpleMessage(String to, String subject, String text);


}
