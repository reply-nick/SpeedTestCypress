
class homePage{



    get goButton() {
        return cy.get('.start-text')
    }

    get downloadResultText(){
        return cy.get('.result-item-container-align-center > .result-item > .result-data > .result-data-large')
    }


    get uploadResultText(){
        return cy.get('.result-container-data > .result-item-container-align-left > .result-item > .result-data')
    } 

    get pingResultText(){
        return cy.get('.result-item-latency.updated > .result-data-value')
    } 


}

const home = new homePage();

export default home;