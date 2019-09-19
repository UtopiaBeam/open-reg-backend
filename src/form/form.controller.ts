import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDTO } from './form.dto';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}

    @Get(':id')
    getForm(@Param() params: string) {
        return this.formService.findById(params.id);
    }

    @Post()
    createForm(@Body() createForm: CreateFormDTO) {
        return this.formService.createForm(createForm);
    }
}