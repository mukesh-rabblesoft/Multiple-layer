import React, { Fragment } from "react";
import AdminHeader from "./Header/Index";
import SidebarMenu from "./Siderbar";
import { Outlet } from "react-router-dom";

class BackEnd extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>BackEnd code</h1>
        <AdminHeader />
        <div className="row">
          <div className="col-2">
            sidebar <SidebarMenu />
          </div>
          <div className="content col-10">
            <Outlet />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default BackEnd;
