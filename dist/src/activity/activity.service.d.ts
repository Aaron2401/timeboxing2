import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ActivityService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createActivityDto: CreateActivityDto): string;
    findAll(): <T extends import(".prisma/client").Prisma.ActivitiesFindManyArgs>(args?: import(".prisma/client").Prisma.SelectSubset<T, import(".prisma/client").Prisma.ActivitiesFindManyArgs<import("@prisma/client/runtime/library").DefaultArgs>>) => import(".prisma/client").Prisma.PrismaPromise<import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$ActivitiesPayload<import("@prisma/client/runtime/library").DefaultArgs>, T, {}>[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ActivitiesClient<{
        id: number;
        title: string;
        description: string;
        status: number;
        start_hour: string;
        end_hour: string;
        task_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateActivityDto: UpdateActivityDto): string;
    remove(id: number): string;
}
