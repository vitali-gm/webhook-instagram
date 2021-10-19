import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [WebhookModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
