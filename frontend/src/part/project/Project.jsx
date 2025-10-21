import { Link } from "react-router"
import "./Project.scss"
import { useState } from "react"
import SlideShow from "../SlideShow/SlideShow"



function Project(prj) {
    const [project, setProject] = useState(prj.project);

    return (<>
        <div className="PRJ-root">
            <div className="PRJ-image">
                <SlideShow images={project.SCREEN} />
            </div>
            <div className="PRJ-content">
                <div className='PRJ-header'>
                    <h2 className='PRJ-title'>
                        {project.title}
                    </h2>
                </div>
                {console.log(project)}
                {project.LINK.length === 0 ? <></> :
                    <>
                        <ul className="PRJ-link">
                            {project.LINK.map((l) => {
                                return (<>
                                    <li key={l.text}>
                                        <a href={l.link}>
                                            {l.image === "" ? <>
                                                {l.text}
                                            </> : <>
                                                <img className={"PRJ-link-img PRJ-link-img-" + l.text} src={l.image} alt={l.text} />
                                            </>}
                                        </a>
                                    </li>
                                </>)
                            })}
                        </ul>
                    </>
                }
                <div className='PRJ-desc'>
                    <p>
                        {project.desc.split("\n").map((t) => {
                            return <>{t}<br /></>
                        })}
                    </p>
                </div>
                <ul className='PRJ-tech'>
                    {project.TECH.length === 0 ? <></> : <>
                        <h3>Technologie: </h3>
                        <div>
                            {project.TECH.map((t) => {
                                return <>
                                    <li key={t.title}><img src={t.image} alt={t.text} title={t.text} /></li>
                                </>
                            })}

                        </div>
                    </>}

                </ul>
            </div>
        </div >
    </>)
}

export default Project