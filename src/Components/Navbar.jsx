import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { IconContext } from 'react-icons';
import { Modal } from 'antd';  // Import Ant Design Modal
import Logo from '../Assets/nobackgroundwhlogo.png';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [hasNotifications, setNotifications] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleProfileClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='navbar-icons'>
            {sidebar ? null : <span className='website-name'>Startboom Digital Academy</span>}
          </div>
          <div className='navbar-icons'>
            <div className='notification-icon'>
              <Link to='/support' className='navbar-icon'>
                <BellOutlined />
              </Link>
              {hasNotifications && <div className='notification-dot'></div>}
            </div>
            <div className='navbar-icon' onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              <UserOutlined />
            </div>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ display: 'flex' }}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <img src={Logo} alt='Logo' style={{ width: '100px', height: 'auto', paddingTop: '20px' }} />
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>

      {/* Ant Design Modal */}
      <Modal
        title="User Profile"
        open={isModalVisible}
        onCancel={handleCloseModal}
        closeIcon={<span className="anticon anticon-close" onClick={handleCloseModal}>&times;</span>}
        footer={null} // Remove the footer
      >
        <div className="container d-flex justify-content-center align-items-center profile">
          <div className="card">
            <div className="upper">
              <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" alt="background" />
            </div>
            <div className="user text-center">
              <div className="profileimg">
                <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80" alt="profile" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <h4 className="mb-0">John Doe</h4>
              <span className="text-muted d-block mb-2">Kyaliwajjala Uganda</span>
              <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                <div className="stats">
                  <h6 className="mb-0">Followers</h6>
                  <span>8,797</span>
                </div>
                <div className="stats">
                  <h6 className="mb-0">Projects</h6>
                  <span>142</span>
                </div>
                <div className="stats">
                  <h6 className="mb-0">Ranks</h6>
                  <span>129</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
