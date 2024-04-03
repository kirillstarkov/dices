import {EntityState} from "@reduxjs/toolkit";
import {IClass} from "entities/class";

export interface ClassesPageSchema extends EntityState<IClass> {
  isLoading?: boolean;
  error?: string
}
