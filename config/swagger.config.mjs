import SwaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UMC Study API',
      version: '1.0.0',
      description: 'UMC Study API with express, API 설명',
    },
    host: 'localhost:3000',
    basepath: '../',
  },
  components: {
    // components 추가
    schemas: {}, // 빈 schemas 추가, 필요시 채울 수 있음
  },
  apis: ['./src/routes/*.mjs', './swagger/*'],
};

export const specs = SwaggerJsdoc(options);
