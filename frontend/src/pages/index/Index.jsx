import { useEffect, useState } from 'react'
import './Index.scss'
import { Link } from 'react-router';
import Project from '../../part/project/Project';
import { getPined } from '../../data/Data';

function App() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getPined((d) => {
      console.log(d);
      
      setProject(d);
    })
  }, []);

  return (
    <>
      <div className='Index-root page'>
        <h1 className='Index-title'>Cylian Charbonnier - Portfolio </h1>
        <ul className='Index-prj'>
          {project.map((p) => {
            return (<>
              <li key={`${p.title}`}>
                <Project project={p}></Project>
              </li>
            </>)
          })}
        </ul>
      </div>
    </>
  )
}

export default App
