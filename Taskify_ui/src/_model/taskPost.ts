import { Guid } from 'guid-typescript';

export interface TaskPost {
    id: Guid;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    assignedUserId: Guid;
}
