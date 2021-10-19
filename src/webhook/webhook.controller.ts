import {Body, Controller, Get, HttpCode, Post, Query} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";


@Controller('webhook')
export class WebhookController {

  constructor(private readonly httpService: HttpService) {}

  @Get()
  async verify(@Query() query) {
    const VERIFY_TOKEN = '1'

    const mode = query['hub.mode'];
    const token = query['hub.verify_token'];
    const challenge = query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return challenge;
      } else {
        return 'Forbidden'
      }
    }
  }

  @HttpCode(200)
  @Post()
  async event(@Body() dto) {
    //todo
    this.httpService.post('', dto);
  }
}
