package application;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DbUnitConfiguration;
import java.io.File;
import java.sql.Connection;
import java.util.List;
import javax.sql.DataSource;
import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.dataset.xml.FlatXmlDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSetBuilder;
import org.dbunit.operation.DatabaseOperation;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfigForTest.class})
@DbUnitConfiguration(databaseConnection = {"datasource"})
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class, DbUnitTestExecutionListener.class})
@DirtiesContext
public abstract class AbstractTest extends AbstractTransactionalJUnit4SpringContextTests {

    @Autowired
    private DataSource dataSource;

    public void setUpDatabase(List<String> dataSetFileNames) {
        try {
            Connection con = DataSourceUtils.getConnection(dataSource);
            IDatabaseConnection connection = new DatabaseConnection(con);
            
            for (String dataSetFileName : dataSetFileNames) {
                System.out.println("--------->"+dataSetFileName);
                
                FlatXmlDataSet additionalDataSet = new FlatXmlDataSetBuilder().setColumnSensing(true).build(new File("src/test/java/DBUnit/" + dataSetFileName));
               
                DatabaseOperation.CLEAN_INSERT.execute(connection, additionalDataSet);
            }
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}
