class HomePage {
    selectorsList(){
        const selectors = {
            homeTabList: ".Mui-selected",
            newTrasactionButton: "[href='/transaction/new']",
        }

        return selectors 
    }
    
    checkHomePage(){
        cy.get(this.selectorsList().homeTabList)
    }
    
    accessTransactionPage(){
        cy.get(this.selectorsList().newTrasactionButton).click()
    }
}

export default HomePage