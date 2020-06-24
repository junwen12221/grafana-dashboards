Feature('Test Dashboards inside the PostgreSQL Folder');
const allure = codeceptjs.container.plugins('allure');

Before( async (I) => {
  I.Authorize();
});

Scenario(
  'Open the PostgreSQL Instance Summary Dashboard and verify Metrics are present and graphs are displayed @not-pr-pipeline',
  async (I, dashboardPage) => {
    allure.severity('normal');
    I.amOnPage(dashboardPage.postgresqlInstanceSummaryDashboard.url);
    dashboardPage.waitForDashboardOpened();
    await dashboardPage.expandEachDashboardRow();
    dashboardPage.verifyMetricsExistence(dashboardPage.postgresqlInstanceSummaryDashboard.metrics);
    await dashboardPage.verifyThereAreNoGraphsWithNA();
    await dashboardPage.verifyThereAreNoGraphsWithoutData(1);
  }
);
