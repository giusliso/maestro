import { Scenario } from "./scenario";
import { Landmark } from "./landmark";

export interface Scena{
    name:string,
    description?:string,
    scenarios?:Scenario[]
    landmark?: Landmark
}