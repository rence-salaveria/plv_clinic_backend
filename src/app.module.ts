import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, StudentModule, AdminModule, EmployeeModule, PrismaModule],
})
export class AppModule { }
