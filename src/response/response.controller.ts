import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDTO } from './response.dto';

@Controller('response')
export class ResponseController {
    constructor(private readonly responseService: ResponseService) {}
    @Get(':id')
    getForm(@Param() params: string) {
        return this.responseService.findById(params.id);
    }

    @Post()
    createForm(@Body() createResponse: CreateResponseDTO) {
        return this.responseService.createResponse(createResponse);
    }
}