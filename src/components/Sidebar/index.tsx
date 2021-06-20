import { useGlobal } from '../../contexts/GlobalContext'
import { Container } from './styles'
import SidebarData from '../../../config/sidebar.json'

export default function Sidebar() {
  const { isToggle } = useGlobal()

  function handleShowmMenu(e) {
    e.currentTarget.className !== 'showMenu'
      ? e.currentTarget.className = 'showMenu'
      : e.currentTarget.className = ''
  }

  return (
    <Container isToggle={isToggle}>
      <div className={`sidebar ${isToggle === true && 'close'}`}>

        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">CarteiraNET</span>
        </div>

        <ul className="nav-links">
          {
            SidebarData.map((item, key) => {
              return (
                item.subMenu === undefined
                  ?
                  <li key={key}>
                    <a href={item.path}>
                      <i className={item.iconClass} ></i>
                      <span className="link_name">{item.label}</span>
                    </a>
                    <ul className="sub-menu">
                      <li><a className="link_name" href="#">{item.label}</a></li>
                    </ul>
                  </li>
                  :
                  <li onClick={handleShowmMenu} key={key}>
                    <div className="iocn-link">
                      <a>
                        <i className={item.iconClass} ></i>
                        <span className="link_name">{item.label}</span>
                      </a>
                      <i className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                      <li><a className="link_name" href="#">{item.label}</a></li>
                      {
                        item.subMenu.map((i, index) => <li key={index}><a href={i.path}>{i.label}</a></li>)
                      }
                    </ul>
                  </li>
              )
            })
          }
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="https://github.com/pablogeokar.png" alt="profile" />
              </div>
              <div className="name-job">
                <div className="profile_name">Pablo George</div>
                <div className="job">Administrador</div>
              </div>
              <i className='bx bx-log-out' ></i>
            </div>
          </li>
        </ul>
      </div>
      {/* <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu' onClick={handleClose} ></i>
          <span className="text">Drop Down Sidebar</span>
        </div>
      </section> */}
    </Container >
  )
}
