import { useEffect, useState } from 'react'
import Project from '../../part/project/Project';
import { getAll } from '../../data/Data';
import "./Competance.scss"

function Competence() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        getAll((d) => {
            setProject(d.sort((a, b) => {
                return (a.id > b.id);
            }));
        })
    }, []);

    return (
        <>
            <div className='Comp-root page'>
                <div className='Comp-prjs-prj Comp-center'>
                    <h2>Projet</h2>
                    <h2>Comptence</h2>
                </div>
                <ul className='Comp-prjs'>
                    {project.map((p) => {
                        return (<>
                            <li key={`${p.title}`} className="Comp-prjs-prj">
                                <Project prj={p}></Project>
                                <ul className="Comp-prjs-prj-comp">
                                    {p.comp.filter((d) => d===""?null:d).map((c) => {
                                        return <><li key={`${p.title}/${c}`} className="Comp-prjs-prj-comp-txt">{c}</li></>
                                    })}
                                </ul>
                            </li>
                        </>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Competence