import { TriggeredUser } from "../../entities/TriggeredUser";

export interface FiltersServices {

    saveTriggeredUser(triggeredUser: TriggeredUser): string;
}