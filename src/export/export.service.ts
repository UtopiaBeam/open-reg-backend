import { Injectable } from '@nestjs/common';
import { ResponseService } from '../response/response.service';
import { csvTransformStream } from './export.csv';
import { Form, FormDocument } from '../form/form.model';
import { userInfoFields } from './export.user';

@Injectable()
export class ExportService {
    constructor(private readonly responseService: ResponseService) {}

    getResponseFields(form: Form) {
        return form.questions.map(({ key }) => ({
            label: key,
            value: `answers.${key}`,
            default: '-',
        }));
    }

    exportToCsv(form: FormDocument) {
        const responseFields = this.getResponseFields(form);
        const keys = [...userInfoFields, ...responseFields];
        const response = this.responseService.findAllResponse(form._id);
        return response.pipe(csvTransformStream(keys));
    }
}