import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

export function BreadNavigation () {
    return (
        <div className=" header-nav flex justify-center mb-7">
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={'/'}>ГЛАВНАЯ</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={'./collection'}>КОЛЛЕКЦИЯ</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}