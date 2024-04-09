/// <reference types = "cypress" />

describe('Open Weather API Test', () => {
  
  it('Get Current Weather for Lisbon', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?q=${Cypress.config('CITY')}&appid=${Cypress.config('API_KEY')}`,
    }).then((response) => {
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
        expect(response.body.main).to.have.keys('temp','feels_like','temp_min','temp_max','pressure','humidity')
        //Validate Wind Object
        assert.isObject(response.body.wind, 'Validate Wind Object')
        expect(response.body.wind).to.have.keys('speed','deg')
        //Validate Sys Object
        assert.isObject(response.body.sys, 'Validate Sys Object')
        expect(response.body.sys).to.have.keys('type','id','country','sunrise','sunset')
    })
  })
            
  it('Get Current Weather Forecast for Lisbon', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}forecast?q=${Cypress.config('CITY')}&appid=${Cypress.config('API_KEY')}`,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.isOkStatusCode).to.eq(true)
        //Validate Country
        assert.isString(response.body.city.country, 'Validate Country')
        expect(response.body.city.country).to.have.string('PT');
        //Validate City
        assert.isString(response.body.city.name, 'Validate City')
        expect(response.body.city.name).to.have.string('Lisbon')
        //Validate Forecast Data Is Not Empty
        assert.isArray(response.body.list, 'Validate Weather List')
        assert.isNotEmpty(response.body.list, 'Validate Weather Array Is Not Empty')
        //Validate Forecast Data
        })
      })

  it('Invalid API Key', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?q=${Cypress.config('CITY')}&appid=${Cypress.config('WRONG_API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.have.string("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    })
  })

  it('Invalid Location Latitude', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?lat=${Cypress.config('WRONG_LAT')}&long=${Cypress.config('LON')}&appid=${Cypress.config('API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.have.string("Nothing to geocode")
    })    
  })

  it('Invalid Location Longitude', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config('URL')}weather?lat=${Cypress.config('LAT')}&long=${Cypress.config('WRONG_LON')}&appid=${Cypress.config('API_KEY')}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.have.string("Nothing to geocode")
    })    
  })
});