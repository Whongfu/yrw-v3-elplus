interface ILoginParams {
    username: string;
    password: string;
}

interface ILoginResult {
    userId: string | number;
    token: string;
    role: { roleName: string;  value: string; };
}

export {
    ILoginParams,
    ILoginResult,
}