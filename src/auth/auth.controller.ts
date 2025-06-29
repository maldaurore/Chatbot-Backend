import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() { email, password, name, chats }) {
    return this.authService.register(email, password, name, chats);
  }

  @Post('refresh')
  async refresh(@Body() { refreshToken }) {
    return this.authService.refresh(refreshToken);
  }
}
