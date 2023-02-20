import { StringLiteral } from "typescript";

export interface ChatComment {
    id: number;
    createdAt: any;
    body: string;
    username: string;
    displayName: string;
    image: string;
}