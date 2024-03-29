import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {RoutesUrls} from "../../constans/routesUrls";

export function BreadNavigation() {
    const [breadCrumbs, setBreadCrumbs] = useState([])
    const {pathname} = useLocation()

    useEffect(() => {
        setBreadCrumbs(pathname.split('/').filter(path => path.length));
    }, [pathname])

    if (!breadCrumbs.length || pathname === RoutesUrls.home.path) {
        return null
    }

    return (
        <div className=" header-nav flex justify-center mb-7">
            <Breadcrumb spacing='8px'
                        separator={<ChevronRightIcon color='gray.500'/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={'/'}>
                        ГЛАВНАЯ
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {
                    breadCrumbs.map((breadCrumb, idx) => (
                        <BreadcrumbItem isCurrentPage={breadCrumb.length === idx + 1}>
                            <BreadcrumbLink as={Link}
                                            to={RoutesUrls[breadCrumb] ? RoutesUrls[breadCrumb].path : ''}>
                                {RoutesUrls[breadCrumb] ? RoutesUrls[breadCrumb].title
                                    : window.document.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>))}
            </Breadcrumb>
        </div>
    )
}