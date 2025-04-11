import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { Persona } from './entities/persona.entity';
import { TypeORMError } from 'typeorm';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
