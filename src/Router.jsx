import React, {  } from "react";
import { Routes, Route } from "react-router-dom";

//common routes
import Form from "./pages/form/Form";
import Dashboard from "./pages/dashboard/Dashboard";

const Router = () => {
    return(
        <Routes>
            <Route path="/">
                <Route index element={<Form/>}/>
                <Route path="form" element={<Form />}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default Router;