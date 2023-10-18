import './ProficienciesGrid.css';

interface ProfProps {
    children: React.ReactNode;
    prof_list: string[];
    style?: React.CSSProperties;
}

export default function ProficienciesBubble({children, prof_list, style}: ProfProps) {
    return (
        <div className="proficiency-container" style={style}>
          <div className="proficiency-header">{children}</div>
          <div className="proficiency-list">
            {prof_list.map((proficiency, index) => (
              <div key={index} className="proficiency-item">
                {proficiency}
              </div>
            ))}
          </div>
        </div>
      );   
}