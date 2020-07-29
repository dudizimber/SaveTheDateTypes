import { Sector } from "../enums";

export interface Filters {
    intimity: number;
    fun: number;
    interactivity: number;
    sector: Sector;
    time: number;
}