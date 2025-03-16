import { Dispatch, SetStateAction } from "react";
import { ICategoriesType } from "./Types";

// filter types
export interface IFilterProps {
  filterBy?: ICategoriesType[] | undefined;
}
export interface IBrandFilterProps {
  itemName: string;
  filterBy: ICategoriesType[] | undefined;
  selectedFilter: string[];
  setSelectedFilter: Dispatch<SetStateAction<string[]>>;
}
export interface ICategoryFilterProps {
  itemName: string;
  filterBy: ICategoriesType[] | undefined;
  selectedFilter: string[];
  setSelectedFilter: Dispatch<SetStateAction<string[]>>;
}
