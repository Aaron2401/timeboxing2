import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    create(createActivityDto: CreateActivityDto): string;
    findAll(): <T extends import(".prisma/client").Prisma.ActivitiesFindManyArgs>(args?: import(".prisma/client").Prisma.SelectSubset<T, import(".prisma/client").Prisma.ActivitiesFindManyArgs<import("@prisma/client/runtime/library").DefaultArgs>>) => import(".prisma/client").Prisma.PrismaPromise<import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$ActivitiesPayload<import("@prisma/client/runtime/library").DefaultArgs>, T, {}>[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ActivitiesClient<{
        id: number;
        title: string;
        description: string;
        status: number;
        start_hour: string;
        end_hour: string;
        task_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateActivityDto: UpdateActivityDto): string;
    remove(id: string): string;
}
