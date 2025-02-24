import Button from "./Button";
import Card from "./Card";

const Accordion = ({languages}) => {
    return (
        <div className="accordion">
            <div className="accordion__Header">
                {
                    languages.map((element) => {
                        const {id, title} = element
                        return (
                            <Button key={id} title={title}/>
                        )
                    })
                }
            </div>
            <div className="accordion__Body">
                
            </div>
        </div>
    )
};
export default Accordion;