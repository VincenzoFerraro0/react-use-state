import Button from "./Button";
import Card from "./Card";

import { useState } from "react";

const Accordion = ({languages}) => {
    // Stato per tenere traccia della lingua selezionata
    const [selectedLanguage, setSelectedLanguage] = useState (null)

    // Funzione per generare i pulsanti delle lingue
    const renderLanguage = () => languages.map((language) => {
        const active = selectedLanguage === language
        const {id, title} = language
        return(
            
            <Button key={id} title={title} isActive={active} selected={ () => setSelectedLanguage(language) } />
        )
    })
     // Funzione per visualizzare la descrizione della lingua selezionata
    const renderSelectedLanguage = () => {
        if (!selectedLanguage) return <h3>Nessun linguaggio selezionato</h3>

        const {title, description} = selectedLanguage
        return(
            <Card title={title} description={description}/>
        )
    }
    return (
        <div className="accordion container-80">
            {/* Sezione dei pulsanti delle lingue */}
            <div className="accordion__Header">
                { renderLanguage() }
            </div>
             {/* Sezione che mostra il linguaggio selezionato */}
            <div className="accordion__Body">
                { renderSelectedLanguage() }
            </div>
        </div>
    )
};
export default Accordion;