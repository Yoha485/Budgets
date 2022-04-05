"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../../user/user.repository");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async register(credentials) {
        try {
            const user = this.userRepository.create(Object.assign(Object.assign({}, credentials), { password: bcrypt.hashSync(credentials.password, Number(process.env.SHIFT)) }));
            await user.save();
            const payload = { id: user.id };
            const token = this.jwtService.sign(payload);
            return { user: Object.assign(Object.assign({}, user.toJson()), { token }) };
        }
        catch (err) {
            console.log(err);
            if (err.code === '23505') {
                throw new common_1.ConflictException('Username has alredy been taken');
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.userRepository.findOne({ where: { email } });
            const isValid = await user.comparePassword(password);
            if (!isValid) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const payload = { id: user.id };
            const token = this.jwtService.sign(payload);
            return { user: Object.assign(Object.assign({}, user.toJson()), { token }) };
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map