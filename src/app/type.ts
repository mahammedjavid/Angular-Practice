export interface ROOM {
    roomNumber: number,
    type: string,
    bhk: number,
    food: string,
    rent: number,
    rating: number
}
export interface IComment {
    id: number,
    name: string,
    email: string
    body: string,
}

export interface IUser {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}