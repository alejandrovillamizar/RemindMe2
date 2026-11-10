import {z} from "zod";
export const reminderStatusSchema=z.enum(["PENDING","COMPLETED","ARCHIVED"]);
export const createReminderSchema=z.object({title:z.string().trim().min(1,"El título es obligatorio.").max(120),description:z.string().trim().max(1000).default(""),dueAt:z.string().datetime({offset:true}).optional(),timeZone:z.string().min(1).max(64)});
export type ReminderStatus=z.infer<typeof reminderStatusSchema>;
export type CreateReminderInput=z.infer<typeof createReminderSchema>;