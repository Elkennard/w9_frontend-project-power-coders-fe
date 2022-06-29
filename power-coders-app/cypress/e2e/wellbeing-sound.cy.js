describe("Sound toggle user journey", () => {
  it("the page should load", () => {
    cy.visit("http://localhost:3000/");
  });
  it("the sound toggle is displayed correctly", () => {
    cy.get(".soundContainer > p").should("have.text", "Sound On");
    cy.get(".switch").should("be.visible");
  });
  it("tests that the sound can be toggled On", () => {
    cy.get(".switch > span").click();
    cy.get(".soundContainer > p").should("have.text", "Sound Off");
  });
  it("tests that the sound can be toggled off", () => {
    cy.wait(1000);
    cy.get(".switch > span").click();
    cy.get(".soundContainer > p").should("have.text", "Sound On");
  });
});
