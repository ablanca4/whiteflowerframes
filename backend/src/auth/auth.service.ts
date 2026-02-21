import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(readonly usersService: UsersService) { }

    async signIn(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(username);
        //TODO find hash of password and compare to user.password_hash
        if (password !== user?.password_hash) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const { password_hash, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
    }
}
