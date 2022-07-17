import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gps } from './entity/gps.entity';
import { CreateGpsRequestDto } from './gps.dto';
import { CreateGpsResponse } from './gps.pb';

@Injectable()
export class GpsService {
  @InjectRepository(Gps)
  private readonly repository: Repository<Gps>;

  public async createGps(payload: CreateGpsRequestDto): Promise<CreateGpsResponse> {
    const gps: Gps = new Gps();

    gps.imei = payload.imei;
    gps.longitude = payload.longitude;
    gps.latitude = payload.latitude;

    await this.repository.save(gps);

    return { id: gps.id, error: null, status: HttpStatus.OK };
  }
}