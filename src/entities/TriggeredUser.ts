import { Column, Entity } from "typeorm";

@Entity()
export class TriggeredUser {
    @Column()
    private _userName: string;
    @Column()
    private _userId: number;
    @Column()
    private _count: number;
    @Column()
    private _message: string;
    
    constructor(userName: string, userId: number, count: number, message: string) {
        this._userName = userName;
        this._userId = userId;
        this._count = count;
        this._message = message;
    }

    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get count(): number {
        return this._count;
    }
    public set count(value: number) {
        this._count = value;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

    public toString = (): string =>{
        return `TriggeredUser (${this._userName}, ${this._userId}, ${this._count}, ${this._message})`;
    }
}