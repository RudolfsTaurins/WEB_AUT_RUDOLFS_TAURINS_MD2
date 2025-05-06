import {BasePage} from "./BasePage.js";


export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }

    static get FacilityField(){
        return cy.get("#combo_facility");
    }
    static get boxField(){
        return cy.get("#chk_hospotal_readmission");
    }
    static get HealthField(){
        return cy.get("#radio_program_medicaid");
    }
    static get calendarField() {
        return cy.get(".input-group-addon");
    }
    static get selectDate() {
        return cy.get(".day");
    }
    static get backButtonFromCalendar(){
        return cy.get('#menu-toggle');
    }
    static get coment(){
        return cy.get("#txt_comment");
    }
    static get BookFieldButton(){
        return cy.get("#btn-book-appointment")
    }

    static get validateFacility(){
        return cy.get('#facility');
    }
    static get validateHospital(){
        return cy.get('#hospital_readmission');
    }
    static get validateHealthCareProgramm(){
        return cy.get('#program');
    }
    static get validateDate(){

        return cy.get('#visit_date');
    }
    static get validateComment(){

        return cy.get('#comment');
    }

}