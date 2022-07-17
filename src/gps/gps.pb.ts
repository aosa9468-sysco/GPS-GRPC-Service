/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "gps";

export interface CreateGpsRequest {
  imei: string;
  longitude: string;
  latitude: string;
}

export interface CreateGpsResponse {
  status: number;
  error: string[];
  id: number;
}

export const GPS_PACKAGE_NAME = "gps";

export interface gpsServiceClient {
  createGps(request: CreateGpsRequest): Observable<CreateGpsResponse>;
}

export interface gpsServiceController {
  createGps(
    request: CreateGpsRequest
  ):
    | Promise<CreateGpsResponse>
    | Observable<CreateGpsResponse>
    | CreateGpsResponse;
}

export function gpsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createGps"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("gpsService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("gpsService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const GPS_SERVICE_NAME = "gpsService";
