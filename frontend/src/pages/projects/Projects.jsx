import { useEffect, useState } from 'react'
import Project from '../../part/project/Project';
import { getAll } from "../../data/Data";
import "./Projects.scss"

function Projects() {
    const [project, setProject] = useState([]);
    const [filterList, setFilterList] = useState(new Set())
    const [filter, setFilter] = useState(new Set())

    function handleFilter(e) {
        if (filter.has(e.target.textContent)) {
            filter.delete(e.target.textContent)
        } else {
            filter.add(e.target.textContent)
        }
        console.log(filter);
        setFilter(filter);
        setProject((oldProject) => {
            return oldProject.map((p) => {
                if (!hasValue(p.tag))
                    p.visible = false;
                else
                    p.visible = true;
                return p;
            })
        })
    }

    function hasValue(tagList) {
        for (let tag of tagList) {
            if (filter.has(tag)) {
                console.log(tag);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        getAll((d) => {
            setProject(d);
            d.map(e => {
                e.tag.forEach((t) => {
                    filterList.add(t.charAt(0).toUpperCase() + t.slice(1));
                })
                e.visible = false;
                return e;
            });
            setFilterList(filterList);
        })
    }, []);

    return (
        <>
            <div className='Projects-root page'>
                <ul className='Projects-tags'>
                    {Array.from(filterList).map((f) => {
                        return (<>
                            <li key={f} onClick={handleFilter} className={"Projects-tag Projects-tag-" + (filter.has(f)?"enable":"disable")}>
                                {f}
                            </li>
                        </>)
                    })}
                </ul>
                <ul className='Projects-prj'>
                    {project.map((p) => {
                        return (<>
                            <li key={`${p.title}`} style={{display: filter.size>0?p.visible?'inline':'none':'inline'}}>
                                <Project prj={p}></Project>
                            </li>
                        </>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Projects;