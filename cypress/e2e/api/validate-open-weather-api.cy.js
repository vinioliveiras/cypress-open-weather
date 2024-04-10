/// <reference types = "cypress" />

context('Open Weather API Test', () => {
  
  it('Get Current Weather for Lisbon', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?q=${Cypress.config('CITY')}&appid=${Cypress.config('API_KEY')}`,
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(200)
      expect(response.isOkStatusCode).to.eq(true)
      //Validate Country
      assert.isString(response.body.sys.country, 'Validate Country')
      expect(response.body.sys.country).to.have.string('PT')
      //Validate City
      assert.isString(response.body.name, 'Validate City')
      expect(response.body.name).to.have.string('Lisbon')
      //Validate Coordenate Object
      assert.isObject(response.body.coord, 'Validate Coordenate Object')
      expect(response.body.coord).to.have.keys('lon','lat')
      //Validate Weather Array
      assert.isArray(response.body.weather, 'Validate Weather Array')
      assert.isNotEmpty(response.body.weather, 'Validate Weather Array Is Not Empty')
      //Validate Main Object
      assert.isObject(response.body.main, 'Validate Main Object')
      expect(response.body.main).to.have.any.keys('temp','feels_like','temp_min','temp_max','pressure','humidity')
      //Validate Wind Object
      assert.isObject(response.body.wind, 'Validate Wind Object')
      expect(response.body.wind).to.have.any.keys('speed','deg','gust')
      //Validate Sys Object
      assert.isObject(response.body.sys, 'Validate Sys Object')
      expect(response.body.sys).to.have.any.keys('type','id','country','sunrise','sunset')
    })
  })
  
  it('Get Current Weather Forecast Data for Lisbon', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}forecast?q=${Cypress.config('CITY')}&appid=${Cypress.config('API_KEY')}`,
    })
    .then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(200)
      expect(response.isOkStatusCode).to.eq(true)
      //Validate Forecast Data
      Cypress._.each(response.body.list.main, (data) => {
        expect(data).to.include.all.keys('temp', 'feels_like', 'temp_min', 'temp_max', 'pressure', 'sea_level', 'grnd_level', 'humidity', 'temp_kf')
      })
      Cypress._.each(response.body.list.weather, (data) => {
        expect(data).to.include.all.keys('id', 'main', 'description', 'icon')
      })
      Cypress._.each(response.body.list.clouds, (data) => {
        expect(data).to.include.all.keys('all')
      })
      Cypress._.each(response.body.list.wind, (data) => {
        expect(data).to.include.all.keys('speed','deg','gust')
      })
      Cypress._.each(response.body.list.city, (data) => {
        expect(data).to.include.all.keys('name','country')
      })
    })
  })
  
  it('Invalid API Key', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?q=${Cypress.config('CITY')}&appid=${Cypress.config('WRONG_API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(401)
      expect(response.body.message).to.have.string("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    })
  })
  
  it('Invalid Location Latitude', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?lat='${Cypress.config('WRONG_LAT')}'&lon=${Cypress.config('LON')}&appid=${Cypress.config('API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(400)
      expect(response.body.message).to.have.string("wrong latitude")
    })    
  })
  
  it('Invalid Location Longitude', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?lat=${Cypress.config('LAT')}&lon=${Cypress.config('WRONG_LON')}&appid=${Cypress.config('API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(400)
      expect(response.body.message).to.have.string("wrong longitude")
    })    
  })
});