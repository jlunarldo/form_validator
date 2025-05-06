package com.number_verification_API.num_validator.Business.Impl;

import com.number_verification_API.num_validator.Business.Service.EmailService;
import com.number_verification_API.num_validator.Model.Request.FormRequest;
import com.number_verification_API.num_validator.Model.Response.GetResponse;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@Service

@Slf4j
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;


    @Autowired
    private TemplateEngine templateEngine;
    public void sendSimpleMessage(String email, String msg){
        System.out.print("helloWorld");

        MimeMessage mime= javaMailSender.createMimeMessage();
    }


    public void sendASimpleMessage(
            String to, String subject, String text) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("noreply@baeldung.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);

    }

}
