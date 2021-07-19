// import React from 'react';
// import {Breadcrumbs as MUIBreadcrumb, Link, Typography} from "@material-ui/core";
// import {withRouter} from 'react-router-dom';

// const Breadcrumb = (props) => {

//     const {history, location: {pathName}} = props;
//     const pathNames = pathName.split("/").filter(x => x);

//     return (  
//         <MUIBreadcrumb aria-label="breadcrumb">
//             <Link onClick={() => history.push("/")}>Home</Link>
//             {pathNames.map((name, index) => {
//                 return <Link onClick={() => history.push("/")}>{name}</Link>
//             })}
//         </MUIBreadcrumb>
//     );
// }
 
// export default Breadcrumb;