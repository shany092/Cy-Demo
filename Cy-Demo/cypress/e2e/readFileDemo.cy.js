 // to get the auto suggestions for cy.
/// <reference types = "cypress"/>
//import { data } from "cypress/types/jquery"

it('Read and Write file', function(){
    cy.fixture('example.json')  // add path address of the file here
    .then((local_var_1) => {  // data is a local variable to store the content of the file in above line
    cy.log(local_var_1.name, local_var_1.name2)
    cy.log(local_var_1.Age)
    cy.log(local_var_1.email)
    })
})
it('Read File using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data1) => {
        cy.log(data1.name)
    })

})

it('Write File using writeFile()', function(){
    cy.writeFile('sampleFile.txt', 'Hello I am writing data in a new file \n')
            //over-writing use {flag: 'a+'}
    cy.writeFile('sampleFile.txt', 'to avoide over-writing use {flag: a+}\n',{flag:'a+'})
})
it('Write File on relative path', function(){
    cy.writeFile('.\cypress\e2e\pages\write-file.txt', 'writing a file in pages folder\n')
})