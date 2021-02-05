describe('训练系统测试用例', function() {
    beforeEach(() => {
        cy.visit('http://training.test.wginfo.com.cn/')
    })

    it('登录', function() {
        cy.get('.change-logon-container input[data-vv-as="账号"]').type('s')
        cy.get('.change-logon-container input[data-vv-as="密码"]').type('s')
        cy.contains('button','登录').click()
    })

    it('年计划', function() {
        cy.contains('.el-submenu__title','训练计划').click()
        cy.contains('.el-submenu__title','综合计划').click()
        cy.contains('.menuitem','年度计划').click()
    })


})