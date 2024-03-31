
import './header.css'
import { Avatar, Button, Input, MenuProps, Space } from 'antd';
import Icon, { BellOutlined, FacebookOutlined, GlobalOutlined, HomeOutlined, InstagramOutlined, QuestionCircleOutlined, ShoppingCartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';



const Header = () => {

    const { Search } = Input;

    return (
        <div className='Container'>
            <div className='Header' >
                <div className='topHeader'>
                    <div className='leftTopHeader'>
                        <div className='optionLine'>
                            <a className="linkOptionLine" href="#">Kênh người bán</a>
                            <a className="linkOptionLine" href="#">Trở thành người bán</a>
                            <a className="linkOptionLine" href="#">Tải ứng dụng</a>
                            <div>
                                <span className='connectOptionLine'>Kết nối</span>
                            </div>
                            <div >
                                <Button className="custom-button-face ant-btn"
                                    icon={<FacebookOutlined />} size='small'
                                    href='https://www.facebook.com/ShopeeVN'
                                    target='_blank'
                                >
                                </Button>

                                <Button className="custom-button-ins ant-btn"
                                    icon={<InstagramOutlined />}
                                    size='small'
                                    href='https://www.instagram.com/Shopee_VN'
                                    target='_blank'
                                ></Button>
                            </div>
                        </div>

                    </div>
                    <div className='nav-bar-space'></div>
                    <div className='right-Top-Header'>
                        <Button className='custom-button-header ant-btn' type='link' icon={<BellOutlined />}>Thông Báo</Button>
                        <Button className='custom-button-header ant-btn' type='link' icon={<QuestionCircleOutlined />}>Hỗ Trợ</Button>
                        <Button className='custom-button-header ant-btn' type='link' icon={<GlobalOutlined />}>Ngôn Ngữ</Button>
                        <a className="accountLink" href="/Login">Đăng nhập</a>
                        <a className="accountLink" href="/Register">Đăng ký</a>
                    </div>

                </div>

                <div className='bottomHeader'>
                    <div className='avatar'>
                        <Avatar size={60} src="data:image /jpeg;base64,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" />
                        <span>Shopee</span>
                    </div>
                    <div className='searchBar'>
                        <Search placeholder="input search text" className='search-custom' style={{ width: 800 }} />
                    </div>

                    <div className='cart'>
                        <Button icon={<ShoppingCartOutlined />}>

                        </Button>
                    </div>
                </div>

            </div >
        </div >
    )
};


export default Header;
