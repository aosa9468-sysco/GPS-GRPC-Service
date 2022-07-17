import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateGpsRequest } from './gps.pb';

export class CreateGpsRequestDto implements CreateGpsRequest {
  @IsString()
  @IsNotEmpty()
  public readonly imei: string;

  @IsString()
  @IsNotEmpty()
  public readonly longitude: string;

  @IsString()
  @IsNotEmpty()
  public readonly latitude: string;

}