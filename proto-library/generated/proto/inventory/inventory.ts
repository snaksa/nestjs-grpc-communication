/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "inventory";

/** hero/hero.proto */

export interface InventoryById {
  id: number;
}

export interface Inventory {
  id: number;
  name: string;
}

export const INVENTORY_PACKAGE_NAME = "inventory";

export interface InventoryServiceClient {
  findOne(request: InventoryById): Observable<Inventory>;
}

export interface InventoryServiceController {
  findOne(request: InventoryById): Promise<Inventory> | Observable<Inventory> | Inventory;
}

export function InventoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("InventoryService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("InventoryService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const INVENTORY_SERVICE_NAME = "InventoryService";
