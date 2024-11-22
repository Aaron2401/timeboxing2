import { Module } from '@nestjs/common';
import { TaskModule } from 'task/task.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ActivityModule } from './activity/activity.module';


@Module({
  imports: [TaskModule, UserModule, PrismaModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
