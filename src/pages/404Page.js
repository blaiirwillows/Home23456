import React from 'react'
import classes from "./style.module.scss";
import css from "./img/style.css"

const NotFoundPage = () => {
  return (  
    <div className={classes.main_am}>
        <p className={classes.mis}>404</p>
        <p className={classes.error}>Not Found</p>
        <p className={classes.menu}>Пожалуйста перезапустите сайт</p>
        <a className={classes.back} href="/">Назад</a>
    </div>
  )
}

export default NotFoundPage