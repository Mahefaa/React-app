import Input from "./Input";
export default function MyNav(props){
    const {brand,item1,item2,item3}=props;
    return(
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
           (//Navbar Brand)
            <a class="navbar-brand ps-3" href="index.html">{brand}</a>
            (//Sidebar Toggle)
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            (//Navbar Search)
            <Input placeholder="Search for..."/>
            (//Navbar)
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">{item1}</a></li>
                        <li><a class="dropdown-item" href="#!">{item2}</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">{item3}</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};