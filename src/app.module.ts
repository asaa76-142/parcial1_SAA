import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { TypeORMError } from 'typeorm';
@Module({

  imports: [PersonasModule]
  TypeOrmModule.forRoot({
    type: 'postegress',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User],
    synchronize: true,
  }),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
