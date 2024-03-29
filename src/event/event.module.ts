import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EVENT_MODEL, EventSchema } from './event.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: EVENT_MODEL, schema: EventSchema }]),
    ],
    controllers: [EventController],
    providers: [EventService],
})
export class EventModule {}
