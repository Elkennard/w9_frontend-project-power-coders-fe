describe("Feedback form user journey", () => {
  it("the page should load", () => {
    cy.visit("http://localhost:3000/");
  });
  it("should be able to click the wellbeing button", () => {
    cy.get(".wellbeingButton").click();
  });
  it("should display the correct text", () => {
      cy.get(".wellbeing-form > h2").should("have.text", "Wellbeing Check-in");
      cy.get("label[for=name]").should("have.text", "Name: ");
      cy.get("label[for=coach").should("have.text", "Enablement coach: ");
      cy.get(".wellbeingCheckText").should("have.text", "How would you rate your wellbeing today?");
      cy.get("label[for=score1]").should("have.text", "😢");
      cy.get("label[for=score5]").should("have.text", "😄");
      cy.get(".submit").should("have.value", "Submit");
  })
  it("should test that the forms can be filled in", () => {    
    cy.get("input[name=name").type("Emma Kennard");
    cy.get("select[name=coach").select('Victoriah Meah');
    cy.get("input[id=score4").click();
    cy.get(".submit").click();
  })
  it("should test that the text is correct after submitting the form", () => {
      cy.get(".thankyouText").should("have.text", "Thank You! Your wellbeing scores have been sent to your enablement coach for review.")
  })
  it("should test that the form can be closed", () => {
      cy.get(".closeButton > button").click();
  })
});
