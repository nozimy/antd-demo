import React, { Component } from 'react';
import './LvHeader.css';

import { Row, Col, Icon, Menu } from 'antd';
import { Breadcrumb } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const iconStyle = { fontSize: 32, color: '#ff3380' };
class LvHeader extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            current: 'mail',
        };
        
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    handleClick(e){
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }
  
  render() {
     
    return (
       <div>
          <header className="lvk-header">
          <Row>
          <Col span={24}>
                <div className="lvk-brand-wrapper">
                  <a href="/" className="lvk-header-brand">
                      <img src="https://lavka.club/assets/dist/img/logo.png"/>
                      <span className="lvk-header-title">Лавка Клуб<br/>
                      <span>Интернет Магазин товаров ручной работы</span></span>
                  </a>
              </div>
              <div className="search-bar">
                <form method="POST" action="/search">
                  <input type="hidden" name="type" value="render"/>
                  <div className="search-input-wrapper">
                    <input id="search-query" type="text" name="searchphrase" placeholder="Поиск товаров и мастерских"/>
                  </div>
                  <div className="search-button-wrapper">
                    <button><Icon type="search" /></button>
                  </div>
                </form>
              </div>
              <div className="header-right-block">
                <div>
                  <div className="lvk-user-controls-tab">
                    <a href="" data-toggle="modal" data-target="#authModal">Войти</a>
                  </div>
                  
                  <div className="lvk-main-header-menu">
                    <ul className="lvk-header-nav">
                      <li className="active"><a href="/personal/favourite">
                        <Icon style={iconStyle}  type="heart-o" />
                        <span className="text">Избранное</span></a>
                        </li>
                      <li>
                          <a href="/workshop-private/products">
                            <Icon style={iconStyle}  type="shop" />
                            <span className="text">Мой	магазин</span>
                            </a>
                        </li>
                      <li><a href="/cart">
                      <Icon style={iconStyle}  type="shopping-cart" />
                      <span className="text">Корзина</span>
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
        </header>
        <Row>
          <Col span={18} offset={3}>
          <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={
                    {fontSize: 16, marginTop: -20}
                }
              >
                <Menu.Item key="mail">
                  ОДЕЖДА
                </Menu.Item>
                <Menu.Item key="app" disabled>
                  УКРАШЕНИЯ
                </Menu.Item>
                <SubMenu title={<span>ПРАЗДНИКИ</span>}>
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">ДЛЯ ДОМА</a>
                </Menu.Item>
                <Menu.Item key="5">
                  ДЛЯ ДЕТЕЙ
                </Menu.Item>
                <Menu.Item key="6">
                 ИСКУССТВО
                </Menu.Item>
                <Menu.Item key="7">
                  ДЛЯ ТВОРЧЕСТВА
                </Menu.Item>
                <Menu.Item key="8">
                  ДЛЯ ДОМАШНИХ ПИТОМЦЕВ
                </Menu.Item>
                <Menu.Item key="9">
                  ПРОЧЕЕ
                </Menu.Item>
              </Menu>
           </Col>
        </Row>
        <div className="breadcrumb-wrapper">
        <Row>
        
          <Col span={18} offset={3}>
          
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>  
        
          </Col>
          
        </Row>
        </div>  
          
      </div>
    );
  }
}


export default LvHeader;
