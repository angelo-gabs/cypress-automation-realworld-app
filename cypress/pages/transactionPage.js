class TransactionPage{
    selectorsList(){
        const selectors = {
            transactionGrid : ".TransactionCreateStepOne-paper"
        }
        
        return selectors
    }

    checkTransactionPage(){
        cy.get(this.selectorsList().transactionGrid)
    }
}

export default TransactionPage