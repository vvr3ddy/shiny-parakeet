import { TriggeredUser } from "../../entities/TriggeredUser";
import { FiltersServices } from "../../services/module-services/FiltersServices";

export class FiltersServicesImpl implements FiltersServices{
    
    saveTriggeredUser(triggeredUser: TriggeredUser): string{
        // TODO: persist the changes to DB
        
        return "null";
    }
}
