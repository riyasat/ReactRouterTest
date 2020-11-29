import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const About = () => {
  const {t}=useTranslation(['common']);
  return (
    <div>
      {t('AlreadyHaveAccount')} <Link to="dashboard">Dashboard</Link>   
    </div>
  )
}
export default About;