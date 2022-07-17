"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPS_SERVICE_NAME = exports.gpsServiceControllerMethods = exports.GPS_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "gps";
exports.GPS_PACKAGE_NAME = "gps";
function gpsServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["createGps"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("gpsService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("gpsService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.gpsServiceControllerMethods = gpsServiceControllerMethods;
exports.GPS_SERVICE_NAME = "gpsService";
//# sourceMappingURL=gps.pb.js.map