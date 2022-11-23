import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./Drawwer.css";
import { FaWallet } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { FaGamepad } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Connect_wallet from '../Header/Connect_wallet';
import Modal from 'react-bootstrap/Modal';
import logo from '../../Assets/logo.png';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { ImFacebook } from 'react-icons/im';
import Index_main from '../Index_main';
import { RiArrowLeftSLine } from 'react-icons/ri';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect to a Wallet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Connect_wallet />
            </Modal.Body>
        </Modal>
    );
}


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function Drawwer() {

    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen2(!open2);
    };


    const [modalShow, setModalShow] = React.useState(false);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className='drawwer_main'>
            <Box className='drawwer_heeader' sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar style={{backgroundColor: "#520b9e"}} className='drawwer_heeader' position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            <Button variant="" className="btn button btn-success d-inline-block ml-auto contact" onClick={() => setModalShow(true)}>
                                <FaWallet /> Connect wallet
                            </Button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader style={{backgroundColor: "#520b9e"}}>
                    <Link className="drawwwe" to="/" onClick={handleDrawerOpen}><img src={logo} alt="" /></Link>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <RiArrowLeftSLine className='text-white' /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Link className="dev_lenk" style={{backgroundColor: "#520b9e"}} to="/" onClick={handleDrawerOpen}><div className='py-3 dev ms-4'><IoHome className="me-1" /> Home</div></Link>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> Pool</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <Link className='accor_item' to="/Browse" onClick={handleDrawerOpen}>
                                    Browse
                                </Link>
                                <Link className='accor_item' to="/Import" onClick={handleDrawerOpen}>Import</Link>
                                <Link className='accor_item' to="/Migrate" onClick={handleDrawerOpen}>Migrate</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> Trade</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <Link className='accor_item' to="/" onClick={handleDrawerOpen}>Exchange</Link>
                                <Link className='accor_item' to="/Liquidity" onClick={handleDrawerOpen}>
                                    Liquidity
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> Game</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <Link className='accor_item' to="/" onClick={handleDrawerOpen}><FaGamepad className="me-1" /> Game</Link>
                                <Link className='accor_item' to="/" onClick={handleDrawerOpen}>
                                    <FaGamepad className="me-1" /> Game 2
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> Farms</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <Link className='accor_item' to="/Your_forms" onClick={handleDrawerOpen}>Your Forms</Link>
                                <Link className='accor_item' to="/All_forms" onClick={handleDrawerOpen}>
                                    All Forms
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Link className="dev_lenk" to="/" style={{backgroundColor: "#520b9e"}} onClick={handleDrawerOpen}><div className='py-3 dev ms-4'><FaGamepad className="me-1" /> NFT</div></Link>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> NFT Marketplace</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <Link className='accor_item' to="/Explore" onClick={handleDrawerOpen}><FaGamepad className="me-1" /> Explore</Link>
                                <Link className='accor_item' to="/Open_market" onClick={handleDrawerOpen}><FaGamepad className="me-1" /> Open Market</Link>
                                <Link className='accor_item' to="/Game_assets" onClick={handleDrawerOpen}>
                                    <FaGamepad className="me-1" /> Game Assets
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Link className="dev_lenk" to="/Launchpad" style={{backgroundColor: "#520b9e"}} onClick={handleDrawerOpen}><div className='py-3 dev ms-4'><FaGamepad className="me-1" /> Launchpad</div></Link>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header className="accor_head"><TbArrowsRightLeft className="me-2" /> Contact</Accordion.Header>
                            <Accordion.Body className='accor_body'>
                                <a onClick={handleDrawerOpen} className='accor_item' href="https://twitter.com/wonder_swap" target="_blank">
                                    <BsTwitter /> Twitter
                                </a>
                                <a onClick={handleDrawerOpen} className='accor_item' href="https://www.facebook.com/profile.php?id=100083933690337" target="_blank"><ImFacebook /> Facebook</a>
                                <a onClick={handleDrawerOpen} className='accor_item' href="https://www.instagram.com/wonderswap/" target="_blank"><BsInstagram /> Instagram</a>
                                <a onClick={handleDrawerOpen} className='accor_item' href="https://t.me/wonderswap_official" target="_blank"><FaTelegram /> Telegram</a>
                                <a onClick={handleDrawerOpen} className='accor_item' href="https://www.youtube.com/channel/UChsKP3LJAlSKOR8QY54kRcg" target="_blank"><TfiYoutube /> Youtube</a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box>
        </div>
    )
}

export default Drawwer