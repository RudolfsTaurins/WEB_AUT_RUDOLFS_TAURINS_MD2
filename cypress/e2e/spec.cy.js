const { AppointmentPage } = require("../../PageObjects/AppointmentPage");
const { HomePage } = require("../../PageObjects/HomePage");
describe('HomeWork 2', () => {
  
  it('passes', () => {
    
    context("Appointment", () => {
      beforeEach(() => {
        HomePage.visit();
  });
  it("Make an Appointment", () =>{
    HomePage.makeAppointmentButton.click();
    HomePage.usernameField.click().type("John Doe");
    HomePage.passwordField.click().type("ThisIsNotAPassword");
    HomePage.loginButton.click();

    AppointmentPage.FacilityField.select("Seoul CURA Healthcare Center");
    AppointmentPage.boxField.click();
    AppointmentPage.HealthField.click();
    AppointmentPage.calendarField.click();
    AppointmentPage.selectDate.contains("30").click();
    AppointmentPage.backButtonFromCalendar.click();
    AppointmentPage.coment.type("CURA Healthcare Service");
    AppointmentPage.BookFieldButton.click();

    
    AppointmentPage.validateFacility.should("contain.text", "Seoul CURA Healthcare Center");
    AppointmentPage.validateHospital.should("contain.text", "Yes");
    AppointmentPage.validateDate.should("contain.text", "30");
    AppointmentPage.validateComment.should("contain.text", "CURA Healthcare Service");

  });

  it.only("Appointment history empty", () =>{
    HomePage.makeAppointmentButton.click();
    HomePage.usernameField.click().type("John Doe");
    HomePage.passwordField.click().type("ThisIsNotAPassword");
    HomePage.loginButton.click();
    HomePage.menuButton.click();
    HomePage.sidebar.should("have.class","active");
    HomePage.historyButton.click();
    HomePage.validateHistory.should("contain.text","No appointment");
  }); 
  });
  })});