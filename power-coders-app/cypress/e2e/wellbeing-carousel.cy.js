describe("Tests the carousel", () => {
  it("the page should load", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should display visible the correct title, description and link", () => {
    cy.get("#carousel-item-0").should("be.visible");
    cy.get("#carousel-item-0 .resourceH3").should("have.text", "Week 1");
    cy.get("#carousel-item-0 .resourceTitle").should(
      "have.text",
      "Hero's Journey"
    );
    cy.get("#carousel-item-0 .resourceDescription").should(
      "contain.text",
      "SoC is designed to challenge you"
    );
    cy.get("#carousel-item-0 .resourceLink").should(
      "have.text",
      "Further Reading"
    );
    cy.get("#carousel-item-0 .resourceImage").should("be.visible");
  });
});
