import { Schema } from "mongoose";
import type { Bank } from "./bank.js";

export const BankSchemaMongo = new Schema<Bank>({
    name: { type: String, required: true },
    code: { type: String, required: true },
    lifecycleStatus: { type: String, enum: ['active', 'inactive', 'discontinued'], default: 'active' },
}, { timestamps: true });