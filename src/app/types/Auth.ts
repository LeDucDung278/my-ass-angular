export type typeLogin = {
    email: string,
    password: string
}
export type TypeLoginResponse ={
    accessToken: string,
    user: {
        _id: string,
        email: string,
        name: string,
        role: number
    }
}
export type IUser ={
    _id?: string,
    name?: string,
    email?:string,
    password?: string,
    role?: number
} 