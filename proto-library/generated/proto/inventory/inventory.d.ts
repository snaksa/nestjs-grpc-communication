import { Observable } from "rxjs";
export declare const protobufPackage = "inventory";
/** hero/hero.proto */
export interface InventoryById {
    id: number;
}
export interface Inventory {
    id: number;
    name: string;
}
export declare const INVENTORY_PACKAGE_NAME = "inventory";
export interface InventoryServiceClient {
    findOne(request: InventoryById): Observable<Inventory>;
}
export interface InventoryServiceController {
    findOne(request: InventoryById): Promise<Inventory> | Observable<Inventory> | Inventory;
}
export declare function InventoryServiceControllerMethods(): (constructor: Function) => void;
export declare const INVENTORY_SERVICE_NAME = "InventoryService";
