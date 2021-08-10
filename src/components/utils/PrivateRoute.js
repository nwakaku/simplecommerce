import  React,{useContext} from  "react";
import { Route, Redirect } from  "react-router-dom";
import { UserContext } from '../../UserContext';


const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

        const {state} =useContext(UserContext)

    const condition = state

    return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/"  />);
};
export  default  PrivateRoute;