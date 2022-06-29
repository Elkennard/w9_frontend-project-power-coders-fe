describe("Burger menu user journey", () => {
  it("the page should load", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should have a burger menu and be able to click it", () => {
    cy.get("#react-burger-menu-btn").click();
  });

  it("should have menu items within the burger menu", () => {
    cy.get(".bm-item.menu-item").should("be.visible");
  });

  it("should close the burger menu", () => {
    cy.get("#react-burger-cross-btn").click();
  });
});
