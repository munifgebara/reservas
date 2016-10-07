package application;

import gumga.framework.core.GumgaValues;

public class ApplicationConstantsForTest implements GumgaValues {

    @Override
    public String getGumgaSecurityUrl() {
        return "http://192.168.25.250/security-api/publicoperation";
    }

    @Override
    public boolean isLogActive() {
        return true;
    }
    
    
    
}
