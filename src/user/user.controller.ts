import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserId } from './user.decorator';
import { Authenticated } from '../auth/auth.decorator';
import { UserInfoDto } from './user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { FormResponse } from '../form/form.response';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authenticated()
    @Get('profile')
    getProfile(@UserId() userId: string) {
        return this.userService.findById(userId);
    }

    @ApiOkResponse({ type: FormResponse })
    @Authenticated()
    @Get('form')
    getRegistrationForm(@UserId() userId: string) {
        return this.userService.getRegistrationForm(userId);
    }

    @Authenticated()
    @Post('form')
    submitRegistrationForm(
        @UserId() userId: string,
        @Body() userInfo: UserInfoDto,
    ) {
        return this.userService.submitRegistrationForm(userId, userInfo);
    }
}
