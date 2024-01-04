it('API test create user', ()=> {
  
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/",
    body: {
      id: "1",
      username: "Dash@",
      firstName: "Dasha",
      lastName: "Nik",
      email: "exp@mail.ru",
      password: "1234",
      phone: "2233",
      userStatus: "1"
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  })
})  

it('API test changes in password', ()=> {

 cy.request({
    method: "PUT",
    url: "https://petstore.swagger.io/v2/user/updateUser",
    body: {
      password: "12345",
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  })
}) 

it('API test delete user', ()=> {

  cy.request({
    method: "DELETE", 
    url: "https://petstore.swagger.io/v2/user/deleteUser",
    failOnStatusCode: false,
    body: {
      id: "1",
      username: "Dash@",
      firstName: "Dasha",
      lastName: "Nik",
      email: "exp@mail.ru",
      password: "12345",
      phone: "2233",
      userStatus: "1"
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(404);
  })
})