import { initMongoose, type InitMongooseOptions } from "./mongoose/index.js";

export interface InitDataSourcesOptions {
    mongoose?: InitMongooseOptions;
}

export const initDataSources = async ({ mongoose }: InitDataSourcesOptions) => { 
    if(mongoose) {
        await initMongoose(mongoose);
    }
}