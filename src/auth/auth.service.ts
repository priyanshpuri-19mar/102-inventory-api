import { Injectable, BadRequestException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) { }

  async signup(signupDto: SignupDto) {

    const existingUser = await this.userModel.findOne({
      email: signupDto.email,
    });

    if (existingUser) {
      throw new BadRequestException(
        'Email already registered',
      );
    }

    const hashedPassword = await bcrypt.hash(
      signupDto.password,
      10,
    );

    const user = new this.userModel({
      name: signupDto.name,
      email: signupDto.email,
      password: hashedPassword,
    });

    return user.save();
  }

}