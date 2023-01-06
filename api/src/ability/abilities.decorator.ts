import { SetMetadata } from "@nestjs/common";
import { Action, Subjects } from "./ability.factory/ability.factory";

// this decorator links the metadata needed in the authorization process to the authorization guard/factory

export interface RequiredRule {
  action: Action;
  subject: Subjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRule[]) => 
SetMetadata(CHECK_ABILITY, requirements);