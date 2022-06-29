describe("When first loaded, the landing page...", () => {
  it("should have a title with the correct text", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".h1title").should("have.text", "Wellbeing Toolkit");
  });

  it("should display a welcome message", () => {
    cy.get("#welcomeMessage").should("have.text", "Welcome!");
  });

  it("should have visible resources and titles", () => {
    cy.get(".resourceH3").should("be.visible");
    cy.get(".resourceTitle").should("be.visible");
  });

  it("should have a wellbeing check in button", () => {
    cy.get(".wellbeingButton").should("have.text", "Wellbeing Check-in?");
  });

  it("should have a wellbeing resource link and it works.", () => {
    cy.get(".resourceLink").should("be.visible");
  });

  it("should display a quote and author", () => {
    cy.get(".quoteText").should("be.visible");
    cy.get(".quoteAuthor").should("be.visible");
  });

  it("should display a break timer", ()=> {
    cy.get("#timer").should("be.visible");
  })


  it("should be able to click the wellbeing button", ()=> {
    cy.get(".wellbeingButton").click();
  })

  
  it("should have a burger menu and be able to click it", ()=> {
    cy.get("#react-burger-menu-btn").click();
  })

  it("should have menu items within the burger menu", ()=> {
    cy.get(".bm-item.menu-item").should("be.visible");
  })

  
  it("should close the burger menu", ()=> {
    cy.get("#react-burger-cross-btn").click();
  })
});