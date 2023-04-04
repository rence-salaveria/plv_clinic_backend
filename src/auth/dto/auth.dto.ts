import { UserType } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthDTO {
  @IsNotEmpty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class CreateAuthDTO extends AuthDTO {
  @IsString()
  userType: UserType;
}