// API/coupons.test.js
const request = require('supertest');
const { faker } = require('@faker-js/faker');
require('dotenv').config();
const baseUrl = process.env.BASE_URL;
const apiToken = process.env.API_TOKEN;
const { couponSchema } = require('../contratos/coupons.contract');

describe('API de Cupons', () => {
  it('Valida o contrato de cupons', () => {
    const coupon = {
      code: 'Cupom-Exemplo',
      amount: '50',
      discount_type: ['fixed_product'],
      description: 'Cupom de 50%'
    };
    const { error } = couponSchema.validate(coupon);
    expect(error).toBeUndefined();
  });

  it('Lista cupons com sucesso', async () => {
    const response = await request(baseUrl)
      .get('/coupons')
      .set('Authorization', apiToken);
    expect(response.status).toBe(200);
  });

  it('Cria cupom com sucesso', async () => {
    const couponCode = faker.string.alphanumeric(8);
    const discountValue = faker.number.int({ min: 5, max: 95 });
    const response = await request(baseUrl)
      .post('/coupons')
      .set('Authorization', apiToken)
      .send({ 
                "code": `Cupom-${couponCode}`, 
                "amount": `${discountValue}`, 
                "discount_type": "fixed_product", 
                "description": `Cupom de ${discountValue}%` 
            });
    expect(response.status).toBe(201);
  });

  it('Tentar criar cupom já existente', async () => {
      const response = await request(baseUrl)
        .post('/coupons')
        .set('Authorization', apiToken)
        .send({
          "code": `cupom50`,
          "amount": `50`,
          "discount_type": "fixed_product",
          "description": `Cupom de 50%`
        });
      expect(response.status).toBe(400);
    });
});