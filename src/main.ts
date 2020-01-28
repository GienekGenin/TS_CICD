import 'reflect-metadata';
import { listenToKill } from './common/services/instance.kill.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { createTypeOrmCOnfig } from './config/typeorm.config-export.service';
// import { Transport } from '@nestjs/microservices';
import { applyMiddleware } from './common/services/app.config-service';
import { seed } from './seeds';

listenToKill();
createTypeOrmCOnfig();
const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    // app.connectMicroservice({
    //   transport: Transport.REDIS,
    //   options: {
    //     url: 'redis://localhost:6379',
    //   },
    // });

    applyMiddleware(app);
    await seed();

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
