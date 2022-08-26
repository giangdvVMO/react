import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { CreateUserDTO } from './dtos/CreateUserDTO.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    postUser(@Body() user: CreateUserDTO) {
        console.log(user);
        const dataUser = user as unknown as User;
        return this.userService.createUser(dataUser);
    }
}
