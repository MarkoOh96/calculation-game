describe('Default tests', () => {
 
    beforeEach(() => {
      cy.visit('/');
    });

    it('has calculation game component', () => {
      cy.contains('Enter the sum:');
    });

    it('check calculation game', ()=> {
      let num1 :any;
      let num2 :any;
      let sum: number;
      cy.get('[data-cy="num1"]')
      .invoke('val') 
      .then(val => {
        num1 = val;
      }).then(() => {
        cy.get('[data-cy="num2"]')
        .invoke('val') 
        .then(val => {
          num2 = val;
        }).then(() => {
          num1 = parseInt(num1);
          num2 = parseInt(num2);
          sum = num1 + num2
          cy.get('[data-cy="sum"').type(sum.toString()).type('{enter}')
        }).then(() => {
          cy.get('[data-cy="result-table"]').find('tr').then((row) => {
            const rowLength = row.length;
            expect(rowLength).to.eq(2)
          })
        })
      })
    
      

   })

})