describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // 新しいURLには'/commands/actions' を含む。
    cy.url().should('include','/commands/actions')

    // inputを取得し、入力する。(クラスに基づいて要素を取得している)
    cy.get('.action-email').type('fake@email.com')

    // 値が更新されたことを確認する。
    cy.get('.action-email').should('have.value','fake@email.com')

  })
})