import { useGlobal } from '../../contexts/GlobalContext'
import { Container } from './styles'
import SidebarData from '../../../config/sidebar.json'
import Link from '../Link'

export default function Sidebar() {
  const { isToggle } = useGlobal()

  function handleShowmMenu(e) {
    e.currentTarget.className !== 'showMenu'
      ? e.currentTarget.className = 'showMenu'
      : e.currentTarget.className = ''
  }

  return (
    <Container>
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
                    <Link href={item.path}>
                      <i className={item.iconClass} ></i>
                      <span className="link_name">{item.label}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li><Link href="#" className="link_name">{item.label}</Link></li>
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
                      <li><a className="link_name">{item.label}</a></li>
                      {
                        item.subMenu.map((i, index) => <li key={index}><Link href={i.path}>{i.label}</Link></li>)
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
    </Container >
  )
}
