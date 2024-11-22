import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        status: number;
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
