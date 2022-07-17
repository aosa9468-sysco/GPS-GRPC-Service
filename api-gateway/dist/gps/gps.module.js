"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpsModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const gps_pb_1 = require("./gps.pb");
const gps_controller_1 = require("./gps.controller");
let GpsModule = class GpsModule {
};
GpsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: gps_pb_1.GPS_SERVICE_NAME,
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: '0.0.0.0:50053',
                        package: gps_pb_1.GPS_PACKAGE_NAME,
                        protoPath: 'src/proto/gps.proto',
                    },
                },
            ]),
        ],
        controllers: [gps_controller_1.GpsController],
    })
], GpsModule);
exports.GpsModule = GpsModule;
//# sourceMappingURL=gps.module.js.map