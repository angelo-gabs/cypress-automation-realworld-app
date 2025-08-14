class TransactionHistoryPage {
    selectorsList() {
        const selectors = {
            personalTab: "[data-test='nav-personal-tab']",
            transactionItens: ".MuiListItem-alignItemsFlexStart"
        }

        return selectors
    }

    accessHistoryTab(){
        cy.get(this.selectorsList().personalTab).click()
    }

    checkHistory(condition){
        cy.get(this.selectorsList().transactionItens).should(condition)
    }
}

export default TransactionHistoryPage