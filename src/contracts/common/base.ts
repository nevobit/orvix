export interface Base {
    readonly id: string;
    readonly createdAt: Date;
    updatedAt: Date;
    lifecycleStatus: 'active' | 'inactive' | 'deleted';
}