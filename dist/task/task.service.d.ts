import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): string;
    findAll(): <T extends import(".prisma/client").Prisma.TaskFindManyArgs>(args?: import(".prisma/client").Prisma.SelectSubset<T, import(".prisma/client").Prisma.TaskFindManyArgs<import("@prisma/client/runtime/library").DefaultArgs>>) => import(".prisma/client").Prisma.PrismaPromise<import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$TaskPayload<import("@prisma/client/runtime/library").DefaultArgs>, T, {}>[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        priority: import(".prisma/client").$Enums.priority;
        description: string;
        user_id: number;
        status: number;
        due_date: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
