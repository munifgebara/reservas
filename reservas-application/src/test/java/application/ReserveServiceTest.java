package application;

import br.com.gumga.reservas.application.service.ReservaService;
import br.com.gumga.reservas.application.service.SalaService;
import br.com.gumga.reservas.domain.model.Sala;
import gumga.framework.core.QueryObject;
import gumga.framework.core.SearchResult;
import gumga.framework.domain.domains.GumgaTime;

import gumga.framework.security.GumgaSecurityCode;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.Random;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class ReserveServiceTest extends AbstractTest {

    @Autowired
    private ReservaService reservaService;
    
    @Autowired
    private SalaService salaService;

   @Test
    public void autowiredTest() {
         Assert.assertNotNull("ReservaService not wired", reservaService);
         Assert.assertNotNull("SalaService not wired", salaService);
    }
    
    @Test
    public void contaSalas() {
        setUpDatabase(Arrays.asList("recursos.xml"));
        SearchResult<Sala> pesquisa = salaService.pesquisa(new QueryObject());
        long count = pesquisa.getCount();
        Assert.assertEquals(3l, count);
    }

    
    
    
}
