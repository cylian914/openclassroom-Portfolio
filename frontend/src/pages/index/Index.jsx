import { useEffect, useState } from 'react'
import './Index.scss'
import Project from '../../part/project/Project';
import { getPined } from '../../data/Data';

function App() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getPined((d) => {
      setProject(d);
    })
  }, []);

  return (
    <>
      <div className='Index-root page'>
        <div className='Index-desc'>
          <p>Dévlopeur Full-Stack passioné par le design/création/utlisation des protocol/api<br/>
          En utilisant NodeJS, expressJS & MongoDB pour le backend et React pour le frontend</p>
        </div>

        <ul className='Index-prj'>
          {project.map((p) => {
            return (<>
              <li key={`${p.title}`}>
                <Project prj={p}></Project>
              </li>
            </>)
          })}
        </ul>
      </div>
    </>
  )
}

export default App
