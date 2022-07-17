import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateGpsRequestDto } from './gps.dto';
import { CreateGpsResponse, GPS_SERVICE_NAME } from './gps.pb';
import { GpsService } from './gps.service';

@Controller()
export class GpsController {
  @Inject(GpsService)
  private readonly service: GpsService;

  @GrpcMethod(GPS_SERVICE_NAME, 'CreateGps')
  private createGps(payload: CreateGpsRequestDto): Promise<CreateGpsResponse> {
    return this.service.createGps(payload);
  }
}