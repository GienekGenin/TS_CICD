import { AllExceptionsFilter } from './common/middleware/all-exceptions.filter';
import { TransformInterceptor } from './common/middleware/transform.interceptor';
import { listenToKill } from './common/services/instance.kill.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import { configService } from './config/config.service';
import * as cors from 'cors';
import { createTypeOrmCOnfig } from './config/typeorm.config-export.service';
listenToKill();
createTypeOrmCOnfig();
const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    app.use(
      cors(),
      helmet(),
      logger('dev'),
      bodyParser.json({ limit: 50000000, type: 'application/json' }),
      bodyParser.urlencoded({ extended: true }),
      bodyParser.text(),
    );

    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalInterceptors(new TransformInterceptor());
    const options = new DocumentBuilder()
      .setTitle('App API docs')
      .setDescription('API description')
      .setVersion('1.0')
      .addTag('tag')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    const port = configService.getPort();

    await app.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`Server started at ${port}`);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error('Start up express error: ', e);
  }
};
bootstrap();
