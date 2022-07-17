import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GPS_PACKAGE_NAME, GPS_SERVICE_NAME } from './gps.pb';
import { GpsController } from './gps.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GPS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: GPS_PACKAGE_NAME,
          protoPath: 'src/proto/gps.proto',
        },
      },
    ]),
  ],
  controllers: [GpsController],
})
export class GpsModule {}