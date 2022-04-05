export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegisterDto extends LoginDto {
    username: string;
}
export declare class UpdateUserDto {
    email: string;
    username: string;
    password: string;
}
export interface AuthPayload {
    id: number;
}
