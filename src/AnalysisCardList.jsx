import Card1 from './assets/Card1.png'
import Card2 from './assets/Card2.png'
import Card3 from './assets/Card3.png'
import AnalysisCard from './AnalysisCard'
export default function AnalysisCardList() {
    return (<>
        <div>
            <AnalysisCard title={"Analysis Application"} description={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
             imageSrc={Card1} tags={['FIGMA','UI/UX']} />
             <AnalysisCard title={"Fortknox Application"} description={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
             imageSrc={Card2} tags={['MOBILE','WEB']} />
             <AnalysisCard title={"Zenocide Application"} description={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
             imageSrc={Card3} tags={['APP','WEB']} />
        </div>
    </>)
}