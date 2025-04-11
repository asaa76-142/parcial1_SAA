import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";


export class CreatePersonaDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo ci debe estar definido' })
    @IsNotEmpty({ message: 'El campo ci no debe ser vacio' })
    @IsInt({ message: 'El campo ci debe ser de tipo numerico' })
    readonly ci: number;
  
    @ApiProperty()
    @IsDefined({ message: 'El campo nombre no debe ser vacio' })
    @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
    readonly nombres: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo primer_apellido no debe ser vacio' })
    @IsString({ message: 'El campo primer_apellido debe ser tipo cadena' })
    @MaxLength(50, { message: 'El campo primer_apellido no debe ser mayor a 50 caracteres' })
    readonly primer_apellido: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo segundo_apellido no debe ser vacio' })
    @IsString({ message: 'El campo segundo_apellido debe ser tipo cadena' })
    @MaxLength(50, { message: 'El campo segundo_apellido no debe ser mayor a 50 caracteres' })
    readonly segundo_apellido: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Fecha Nacimiento debe estar definido' })
    @IsString({ message: 'El campo Fecha Nacimiento debe ser tipo fecha' })
    readonly fechaNacimiento: Date;
  persona: any;



}



