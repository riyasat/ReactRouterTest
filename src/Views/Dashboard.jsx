import React from "react"
import { useTranslation } from "react-i18next"

import {  NavLink } from "react-router-dom"

const Dashboard = () => {
  const {t}=useTranslation(['common']);

  return (
    <div>
      {t('SignIn')} <NavLink to="about">About</NavLink> 
    </div>
  )
}
export default Dashboard;
