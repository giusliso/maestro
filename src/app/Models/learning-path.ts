import {Target} from './target';

export interface LearningPath{
    nome?:number,
    descrizione:string,
    targets?:Target[],
    activationList?:number[],
}