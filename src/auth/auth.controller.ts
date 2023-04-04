import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";
import { UserType } from "@prisma/client";

// localhost:3333/auth/admin/new-account POST
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() dto: AuthDTO) {
    return this.authService.login(dto)
  }

  @Post('admin/new-account')
  createAdmin(@Body() dto: AuthDTO) {
    return this.authService.createUser(dto, UserType.ADMIN)
  }

  @Post('patient/new-account')
  createPatient(@Body() dto: AuthDTO) {
    return this.authService.createUser(dto, UserType.PATIENT)
  }
  
}

// localhost:5555/auth/new-account POST