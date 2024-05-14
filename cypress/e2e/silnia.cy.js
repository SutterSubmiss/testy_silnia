describe('Test wsi.edu.pl', ()=>{
    beforeEach( ()=>{
        cy.visit('http://localhost:4200/')
    })

    it('Sprawdzenie czy jest strona w UTF-8', ()=>{
        cy.document().should('have.property','charset').and('eq', 'UTF-8')
    })

    it('Sprawdzenie czy silnia się wyświetla', ()=>{

    var j =1
    var i = 1
       
       
       cy.get('.sbm')
       .click()
       .wait(1000)
       for(let elem of document.querySelectorAll('elem')){
        elem.should('eq',i+'!='+(i*j))

        
        i+=1
        j*=i

    
       }

        

    })
})