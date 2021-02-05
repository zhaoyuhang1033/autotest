describe('抚顺系统测试用例', function() {
    beforeEach(() => {
        cy.visit('http://192.168.5.9:4110/')
    })

    //登录功能
    it('登录', function() {
        cy.get('.change-logon-container input[data-vv-as="用户名/手机号"]').type('s')
        cy.get('.change-logon-container input[data-vv-as="密码"]').type('s')
        cy.contains('button','登录').click()
        cy.url().should('include', '/overhaul/home/index')
        cy.get('.header-item menu-level-root-header-item').contains('检修管理').hover()
        cy.get('.header-bar-item-container submenu hierarchical menu-level-1').contains('检修计划管理').click()
        
        
    })

    // //进入大检修
    // it('检修计划包', function() {
    //     cy.url().should('include', '/overhaul/home/index')
    //     cy.url('overhaul/brief-plan/index')
    // })


})