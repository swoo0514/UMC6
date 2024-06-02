import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';
import { status } from './config/response.status.mjs';
import { tempRouter } from './src/routes/temp.route.mjs';
import { userRouter } from './src/routes/user.route.mjs';
import { response } from './config/response.mjs';
import { specs } from './config/swagger.config.mjs';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));
// router setting
app.use('/temp', tempRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  console.log('error', err);
  res
    .status(err.data.status || status.INTERNAL_SERVER_ERROR)
    .send(response(err.data));
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`);
});
