import { Col, Container, Form, FormControl, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faMoneyCheckAlt, faShoppingCart, faStarHalfAlt, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import Review from '../Review/Review';
import AdminRoute from '../AdminRoute/AdminRoute';
import DashboardNotFound from '../DashboardNotFoud/DashboardNotFound';

const Dashboard = () => {

    const orderIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const payIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    const reviewIcon = <FontAwesomeIcon icon={faStarHalfAlt} />
    const adminIcon = <FontAwesomeIcon icon={faUserShield} />
    const addIcon = <FontAwesomeIcon icon={faCartPlus} />
    const userIcon = <FontAwesomeIcon icon={faUser} />

    const { user, admin, logOut } = useAuth();

    let { path, url } = useRouteMatch()

    const handleLogout = () => {
        const proceed = window.confirm("Are you sure, you want to Logout !!!")
        if (proceed) {
            logOut()
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" box-btn expand='md'>
                <Container fluid>
                    <Navbar.Toggle className="" aria-controls="offcanvasNavbar" />
                    <Navbar.Brand className=" ms-md-5 py-3">Dashboard</Navbar.Brand>
                    <Link className="me-md-4 text-decoration-none text-light h5" to="/">Home</Link>
                    <Navbar.Offcanvas
                        className="w-75"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"

                    >
                        <Offcanvas.Header className="ms-auto" closeButton>
                            {/* <Offcanvas.Title  id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body className="">
                            <Nav className=" d-flex justify-content-start   flex-grow-1 pe-3">
                                <div className="d-flex flex-column mt-2  align-items-center">
                                    <span className="h3 user-icon px-2 py-1">{userIcon}</span>
                                    <p className="m-0">{user?.displayName}</p>
                                </div>

                                <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                    <span className="box-btn">{payIcon}</span>
                                    <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/pay`}>Pay</Link>
                                </div>
                                <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                    <span className="box-btn">{orderIcon}</span>
                                    <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}`}>My Orders</Link>
                                </div>
                                <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                    <span className="box-btn">{reviewIcon}</span>
                                    <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/review`}>Review</Link>
                                </div>
                                {
                                    admin && <><div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                        <span className="box-btn">{adminIcon}</span>
                                        <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/makeadmin`}>Make Admin</Link>
                                    </div>
                                        <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                            <span className="box-btn">{addIcon}</span>
                                            <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/add_product`}>Add a Product</Link>
                                        </div>
                                        <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                            <span className="box-btn">{orderIcon}</span>
                                            <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_product`}>Manage Product</Link>
                                        </div>
                                        <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                            <span className="box-btn">{orderIcon}</span>
                                            <Link className="sp3 py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_all_orders`}>Manage Orders</Link>
                                        </div></>
                                }
                                <div className="mt-1 ps-3">
                                    <button onClick={handleLogout} className="text-decoration-none  text-light btn btn-danger w-100 " >Logout</button>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Row className="g-0 ">
                <Col style={{ height: "88vh", overflowX: "hidden", overflowY: 'scroll', display: 'block' }} className=" mt-0 col-md-2  flex-column bg-light  d-flex justify-content-center  text-start dashbox col-0">
                    <div className="d-flex flex-column mt-2  align-items-center">
                        <span className="h3 user-icon px-2 py-1">{userIcon}</span>
                        <p className="m-0">{user?.displayName}</p>
                    </div>

                    <Link className="  text-decoration-none" to={`${url}/pay`}> <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                        <span className="box-btn">{payIcon}</span>
                        <span className="py-2 px-2 box-btn"> Pay</span>
                    </div></Link>
                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                        <span className="box-btn">{orderIcon}</span>
                        <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}`}>My Orders</Link>
                    </div>
                    <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                        <span className="box-btn">{reviewIcon}</span>
                        <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/review`}>Review</Link>
                    </div>
                    {
                        admin && <><div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                            <span className="box-btn">{adminIcon}</span>
                            <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/makeadmin`}>Make Admin</Link>
                        </div>
                            <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                <span className="box-btn">{addIcon}</span>
                                <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/add_product`}>Add a Product</Link>
                            </div>
                            <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                <span className="box-btn">{orderIcon}</span>
                                <Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_product`}>Manage Product</Link>
                            </div>
                            <div className="ps-3 py-1 dashboard-font d-flex align-items-center">
                                <span className="box-btn">{orderIcon}</span>
                                <Link className=" py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_all_orders`}>Manage Orders</Link>
                            </div></>
                    }

                    <div className="mt-1 ps-3 mb-2">
                        <button onClick={handleLogout} className="text-decoration-none  text-light btn btn-danger w-100 " >Logout</button>
                    </div>

                </Col>
                <Col style={{ height: "88vh", overflowX: "hidden", overflowY: 'scroll' }} className="g-2 mt-0 col-md-10 col-12  ">
                    <Container className="mb-4">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute exact path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/add_product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manage_product`}>
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manage_all_orders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <Route path={`${path}/*`}>
                                <DashboardNotFound></DashboardNotFound>
                            </Route>
                        </Switch>
                    </Container>

                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;


{/* <div className="d-flex flex-column justify-content-center   ">
<Link className="py-2" to={`${url}/makeadmin`}>Pay</Link>
<Link className="py-2" to={`${url}`}>My Orders</Link>
<Link className="py-2" to={`${url}/review`}>Review</Link>
<Link className="py-2" to={`${url}/makeadmin`}>Make Admin</Link>
<Link className="py-2" to={`${url}/add_product`}>Add a Product</Link>
<Link className="py-2" to={`${url}/manage_product`}>Manage Product</Link>
<Link className="py-2" to={`${url}/manage_all_orders`}>Manage All Orders</Link>
</div>
<div className="mt-5">
<button onClick="" className="text-decoration-none  text-light logout-btn  " >Logout</button>
</div> */}

{/* <div className="d-flex flex-column justify-content-center   ">
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/makeadmin`}>Pay</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}`}>My Orders</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/review`}>Review</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/makeadmin`}>Make Admin</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/add_product`}>Add a Product</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_product`}>Manage Product</Link>
<Link className="py-2 px-2 box-btn text-decoration-none" to={`${url}/manage_all_orders`}>Manage All Orders</Link>
</div>
<div className="mt-5">
<button onClick="" className="text-decoration-none  text-light logout-btn  " >Logout</button>
</div> */}