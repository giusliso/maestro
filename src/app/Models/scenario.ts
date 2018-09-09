import { LearningPath } from "./learning-path";

export interface Scenario{
    nome?:number,
    descrizione:string,
    learningPaths?:LearningPath[],
}