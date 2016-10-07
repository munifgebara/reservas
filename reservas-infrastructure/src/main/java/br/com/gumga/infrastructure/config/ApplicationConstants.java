package br.com.gumga.infrastructure.config;

import gumga.framework.core.GumgaValues;
import org.springframework.stereotype.Component;

@Component
public class ApplicationConstants implements GumgaValues {

    @Override
    public String getGumgaSecurityUrl() {
        return "http://192.168.0.105:8081/security-api/publicoperations";
    }

    @Override
    public boolean isLogActive() {
        return true;
    }

}
