// import { ApiProperty } from "@nestjs/swagger"
import { IsMobilePhone, IsNotEmpty, IsString, MaxLength } from "class-validator"
// import { defaultStringLength } from "src/shared/constants/common.constants"

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string
}

const UpdateUserDTO: Partial<CreateUserDTO> = {

};