package application;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import gumga.framework.application.GumgaRepositoryFactoryBean;
import gumga.framework.application.service.JasyptGumgaPasswordService;
import gumga.framework.core.service.GumgaPasswordService;
import gumga.framework.domain.GumgaQueryParserProvider;
import java.util.Properties;
import javax.persistence.CacheStoreMode;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceException;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan({"gumga.framework.application", "br.com.gumga.reservas.application"})
@EnableJpaRepositories(repositoryFactoryBeanClass = GumgaRepositoryFactoryBean.class, basePackages = {"gumga.framework.application", "br.com.gumga.reservas.application"})
@EnableTransactionManagement(proxyTargetClass = true)
class SpringConfigForTest {

    @Bean(name = "datasource")
    public static DataSource getDataSource() {
        return new HikariDataSource(generateConfigurationDataSource());
    }

    private static HikariConfig generateConfigurationDataSource() {
        HikariConfig configuration = new HikariConfig();
        GumgaQueryParserProvider.defaultMap = GumgaQueryParserProvider.getMySqlLikeMap();

        configuration.setDataSourceClassName("org.h2.jdbcx.JdbcDataSource");
        configuration.addDataSourceProperty("url", "jdbc:h2:mem:securitytest;MVCC=true");
        configuration.addDataSourceProperty("user", "sa");
        configuration.addDataSourceProperty("password", "sa");

        configuration.setMaximumPoolSize(20);

        configuration.setIdleTimeout(30000L);
        configuration.setInitializationFailFast(true);
        return configuration;
    }

    @Bean
    @Autowired
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) throws PersistenceException {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();

        Properties properties = new Properties();
        properties.put("eclipselink.weaving", "false");
        properties.put("hibernate.hbm2ddl.auto", "create-drop");
        properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");

        properties.put("hibernate.ejb.naming_strategy", "org.hibernate.cfg.ImprovedNamingStrategy");

        properties.put("hibernate.show_sql", "true");

        properties.put("hibernate.connection.charSet", "UTF-8");
        properties.put("hibernate.connection.characterEncoding", "UTF-8");
        properties.put("hibernate.connection.useUnicode", "true");
        properties.put("hibernate.jdbc.batch_size", "50");


        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("gumga.framework.domain", "br.com.gumga.reservas");
        factory.setDataSource(dataSource);

        factory.setJpaProperties(properties);
        factory.afterPropertiesSet();

        return factory;
    }

    @Bean
    @Autowired
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

    @Bean
    public GumgaPasswordService gumgaPasswordService() {
        return new JasyptGumgaPasswordService();
    }

    @Bean
    @Autowired
    public ApplicationConstantsForTest aplApplicationConstantsForTest() {
        return new ApplicationConstantsForTest();
    }

}
