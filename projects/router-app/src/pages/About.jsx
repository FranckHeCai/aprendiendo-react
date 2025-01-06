import {Link} from "../Link.jsx"
import pp from "../img/pp_franckcai.png"

export default function AboutPage({ routeParams }) {

  const i18n = {
    en: {
      title: "About me",
      description: "Hi my name is Franck and this is a react router clone!",
      button: "Go back to home"
    },
    es:{
      title: "Sobre mi",
      description: "Hola mi nombre es Franck y esto es un clone de react router!",
      button: "Volver al inicio"
    }
  }
  
  const useI18n = (lang) =>{
    return  i18n[lang] ?? i18n.en
  }

  const {title, description, button} = useI18n(routeParams.lang)


    return(
      <>
        <h1>{title}</h1>
        <div>
          <img src={pp} alt="picture of user" width="200"/>
          <p>{description}</p>
        </div>
        <Link to="/">{button}</Link>
      </>
    )
  }