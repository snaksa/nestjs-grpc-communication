/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "catalog";

/** hero/hero.proto */

export interface CatalogById {
  id: number;
}

export interface Catalog {
  id: number;
  name: string;
}

export const CATALOG_PACKAGE_NAME = "catalog";

export interface CatalogServiceClient {
  findOne(request: CatalogById): Observable<Catalog>;
}

export interface CatalogServiceController {
  findOne(request: CatalogById): Promise<Catalog> | Observable<Catalog> | Catalog;
}

export function CatalogServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CatalogService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CatalogService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CATALOG_SERVICE_NAME = "CatalogService";
