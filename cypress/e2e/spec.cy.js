describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(550, 750);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");
    cy.get("header");

    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.viewport(550, 750);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get(".MuiAlert-message").contains("gagal");
  });
});

describe("Dashboard (Overview)", () => {
  it("should display dashboard page with correct elements", () => {
    cy.visit("http://localhost:5173/dashboard");

    cy.url().should("include", "/dashboard");

    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");
    cy.get("main").should("be.visible");

    cy.get("nav").contains("Overview");
    cy.get("nav").contains("Balance");
    cy.get("nav").contains("Transaction");
    cy.get("nav").contains("Bills");
    cy.get("nav").contains("Expense");

    cy.get("main").contains("Total Balance");
    cy.get("main").contains("Goals");
    cy.get("main").contains("Upcoming Bill");

    cy.wait(3000);
  });

  it("should navigate to Expense page from sidebar", () => {
    cy.visit("http://localhost:5173/dashboard");

    cy.get("nav").contains("Expense").click();

    cy.url().should("include", "/expense");
    cy.get("main").should("be.visible");

    cy.wait(2000);
  });
});