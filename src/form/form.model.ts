import { Model, Document, Schema } from 'mongoose';
import { Question, QuestionSchema } from './question.model';
import { EVENT_MODEL } from '../event/event.model';

export interface Form extends Document {
    eventId: string;
    questions: Question[];
    title: string;
    description: string;
}

export type FormModel = Model<Form>;

export const FORM_MODEL = 'form';

export const FormSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: EVENT_MODEL,
    },
    questions: {
        type: [QuestionSchema],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});