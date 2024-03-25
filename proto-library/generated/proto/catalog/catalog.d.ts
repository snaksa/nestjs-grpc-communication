import { Observable } from "rxjs";
export declare const protobufPackage = "catalog";
/** hero/hero.proto */
export interface CatalogById {
    id: number;
}
export interface Catalog {
    id: number;
    name: string;
}
export declare const CATALOG_PACKAGE_NAME = "catalog";
export interface CatalogServiceClient {
    findOne(request: CatalogById): Observable<Catalog>;
}
export interface CatalogServiceController {
    findOne(request: CatalogById): Promise<Catalog> | Observable<Catalog> | Catalog;
}
export declare function CatalogServiceControllerMethods(): (constructor: Function) => void;
export declare const CATALOG_SERVICE_NAME = "CatalogService";
