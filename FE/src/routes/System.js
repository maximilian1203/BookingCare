import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import UserManage from "../containers/System/UserManage"
import UserRedux from "../containers/System/Admin/UserRedux"
import { isThisTypeNode } from "typescript"
import Header from "../containers/Header/Header"
import ManageDoctor from "../containers/System/Admin/ManageDoctor"
import ManageSpecialty from "../containers/System/Specialty/ManageSpecialty"
import ManageClinic from "../containers/System/Clinic/ManageClinic"

function System({ systemMenuPath, isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <Header />}
      <div className="system-container">
        <div className="system-list">
          <Switch>
            <Route path="/system/user-manage" component={UserRedux} />
            {/* <Route path="/system/user-redux" component={UserRedux} /> */}
            <Route path="/system/manage-doctor" component={ManageDoctor} />
            <Route
              path="/system/manage-specialty"
              component={ManageSpecialty}
            />
            <Route path="/system/manage-clinic" component={ManageClinic} />
            <Route
              component={() => {
                return <Redirect to={systemMenuPath} />
              }}
            />
          </Switch>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(System)
