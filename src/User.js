import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const user = [
    {
        id:1,
        name:'harshana',
    },
    {
        id:2,
        name:'bandara',
    }
];

const User = () => {
    return(
       <Box sx={{width: 'calc(100% - 100px', margin: 'auto', marginTop:'100px',}}>
         <UserForm />
        <UserTable rows={user} />
       </Box>
    );
}

export default User;
