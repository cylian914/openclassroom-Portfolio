import './Apropos.scss'
import logoOpenClassRoom from '../../assets/Apropos/Logo_OpenClassrooms.png'
import Project from '../../part/project/Project'


function Apropos() {

  return (
    <>
      <div className='Apropos-root page'>
        <div className='Apropos-desc'>
          <p>Dévlopeur Full-Stack passioné par le design/création/utlisation des protocol/api<br />
            En utilisant NodeJS, expressJS & MongoDB pour le backend et React pour le frontend</p>
        </div>
        <div className='Apropos-parcours'>
          <h3>2025</h3>
          <div className='Apropos-parcour'>
            <Project prj={{title: "Devlopement web OpenClassRoom", desc: "Formation de conception, création et de maintenance de sites web.", SCREEN: [{image: logoOpenClassRoom, text: "logo openclassroom"}]}}></Project>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Apropos
