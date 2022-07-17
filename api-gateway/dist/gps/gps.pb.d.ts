import { Observable } from "rxjs";
export declare const protobufPackage = "gps";
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
export declare const GPS_PACKAGE_NAME = "gps";
export interface gpsServiceClient {
    createGps(request: CreateGpsRequest): Observable<CreateGpsResponse>;
}
export interface gpsServiceController {
    createGps(request: CreateGpsRequest): Promise<CreateGpsResponse> | Observable<CreateGpsResponse> | CreateGpsResponse;
}
export declare function gpsServiceControllerMethods(): (constructor: Function) => void;
export declare const GPS_SERVICE_NAME = "gpsService";
