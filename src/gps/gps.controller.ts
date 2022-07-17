import { Controller, Get, Inject, OnModuleInit, Param, ParseIntPipe, UseGuards, Post, Body } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  gpsServiceClient,
  GPS_SERVICE_NAME,
  CreateGpsResponse,
  CreateGpsRequest,
} from './gps.pb';
import { AuthGuard } from '../auth/auth.guard';

@Controller('gps')
export class GpsController implements OnModuleInit {
  private svc: gpsServiceClient;

  @Inject(GPS_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<gpsServiceClient>(GPS_SERVICE_NAME);
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createGps(@Body() body: CreateGpsRequest): Promise<Observable<CreateGpsResponse>> {
    return this.svc.createGps(body);
  }
}