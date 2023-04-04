import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO, CreateAuthDTO } from './dto';
import { UserType } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) { }
  async login(dto: AuthDTO) {
    const user = await this.prismaService.user.findUnique({
      where: {
        identifier: dto.identifier
      }
    })
    if (!user) {
      return { message: 'User not found' }
    }
    if (user.password !== dto.password) {
      return { message: 'Password incorrect' }
    }
    return { message: 'Login successful' }
  }

  async createUser(dto: AuthDTO, userType: UserType) {
    // create actual user
    const user = await this.prismaService.user.create({
      data: {
        identifier: dto.identifier,
        password: dto.password,
        userType: userType
      }
    })

    // create patient or admin in designated tables with the returned ID
    // also pass in the ID number from the dto.identifier

    return {
      message: `${userType} created successfully`,
      data: user
    }
  }
}

