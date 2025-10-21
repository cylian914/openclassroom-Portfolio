import { useEffect, useState } from 'react'
import Project from '../../part/project/Project';
import { getAll } from "../../data/Data";
import "./Projects.scss"

function Projects() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        getAll((d) => {
            console.log(d);
            setProject(d);
        })
    }, []);

    return (
        <>
            <div className='Projects-root page'>
                <h1 className='Projects-title'>Cylian Charbonnier - Portfolio </h1>
                <ul className='Projects-prj'>
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

export default Projects;