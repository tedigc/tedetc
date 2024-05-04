describe("visit the home page", () => {
  it("renders a header", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("heading", { name: "Hello, World!" }).should("be.visible");
  });
});
