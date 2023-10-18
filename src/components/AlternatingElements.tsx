import './AlternatingElements.css';
import content from '../../public/Content.json'

export default function AlternatingElements() {
    const part_time = content.part_time;
    return (
        <div>
            <div className="flex">
                <div className="ac-static">I'm a part-time</div>
                <ul className="ac-dynamic">
                    {part_time.map((item, index) => {
                        return <li key={index}><span>{item}</span></li>
                    })}
                </ul>
            </div>
            <div className="ac-static">
                And a full-time <span style={{fontWeight:"500"}}>human being.</span>
            </div>
        </div>
    )
}