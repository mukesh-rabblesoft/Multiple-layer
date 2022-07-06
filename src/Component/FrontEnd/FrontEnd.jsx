import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "./Header";

class FrontEnd extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-12">
            <TopMenu />
            <Outlet/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FrontEnd;
