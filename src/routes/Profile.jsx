import { TabTitle } from "../../../utils/General";
import ManageAccount from "../../UI/Account/ManageAccount/ManageAccount";
import MyAccount from "../../UI/Account/MyAccount/MyAccount";

export const Profile = () => {

    TabTitle("My Account - Subham")

    return ( 
        <MyAccount />
     );
}

export const AccountManager = () => {

    TabTitle("My Account - Subham")

    return (
        <ManageAccount />
    );
}