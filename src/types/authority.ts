import { CurrentUser } from "./current-user";
import { AuthorityToken } from "./authority-token";

export interface Authority {
    currentUser: CurrentUser | null;
    token: AuthorityToken | null;
}