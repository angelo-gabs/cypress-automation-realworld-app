class HomePage {
    selectorsList(){
        const selectors = {
            homeTabList: ".Mui-selected"
        }

        return selectors 
    }
    
    checkHomePage(){
        cy.get(this.selectorsList().homeTabList).should('be.visible')
    }
}

export default HomePage