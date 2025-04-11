import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PersonasService {
  constructor(@InjectRepository(Persona) private PersonaRepository: Repository<Persona>) {}

  async create(createPersonaDTO: CreatePersonaDto): Promise<Persona> {
    const existe = await this.PersonaRepository.findOneBy({
      nombres: createPersonaDTO.nombres.trim(),
    });

    if (existe) throw new ConflictException('La persona ya existe');

    const persona = new Persona();
    persona.ci = createPersonaDTO.persona.trim();
    persona.nombres = createPersonaDTO.nombres.trim();
    persona.primer_apellido = createPersonaDTO.primer_apellido.trim();
    persona.segundo_apellido = createPersonaDTO.segundo_apellido.trim();
    persona.fecha_nacimiento = createPersonaDTO.fechaNacimiento;
    return this.PersonaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.PersonaRepository.find({});
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.PersonaRepository.findOneBy({ id });

    if (!persona) throw new NotFoundException('La Persona no existe');

    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = this.findOne(id);
    const personaUpdate = Object.assign(persona, updatePersonaDto);
    return this.PersonaRepository.save(personaUpdate);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    return this.PersonaRepository.softRemove(persona);
  }

}



