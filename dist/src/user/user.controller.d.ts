import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        status: number;
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        status: number;
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
