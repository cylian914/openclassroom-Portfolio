import { Link } from "react-router"
import "./Project.scss"
import { useState } from "react"
import SlideShow from "../SlideShow/SlideShow"

function Project({ prj }) {
    const [project, setProject] = useState(prj);

    return (<>
        <div className={"PRJ-root " + "tag-" + project.tag?.join(" tag-")}>
            <div className="PRJ-image">
                <SlideShow images={project.SCREEN} />
            </div>
            <div className="PRJ-content">
                <div className='PRJ-header'>
                    <h2 className='PRJ-title'>
                        {project.title}
                    </h2>
                </div>

                {!project.LINK?.length ? <></> :
                    <>
                        <ul className="PRJ-link">
                            {project.LINK?.map((l) => {
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
                    {!project.TECH?.length ? <></> : <>
                        <h3>Technologie: </h3>
                        {project.TECH?.map((t) => {
                            return <>
                                <li key={t.title}><img src={t.image} alt={t.text} title={t.text} /></li>
                            </>
                        })}

                    </>}
                </ul>

                <ul className="PRJ-tag">
                    {!project.tag?.length ? <></> : <>
                        <h3>Tag:</h3>
                        {project.tag?.map((tag) => {
                            return <>
                                <li key={project.title + "-" + tag}>{tag}</li>
                            </>
                        })}</>}
                </ul>
            </div>
        </div >
    </>)
}

export default Project