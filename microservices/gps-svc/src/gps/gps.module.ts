import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpsController } from './gps.controller';
import { GpsService } from './gps.service';
import { Gps } from './entity/gps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gps])],
  controllers: [GpsController],
  providers: [GpsService],
})
export class GpsModule {}