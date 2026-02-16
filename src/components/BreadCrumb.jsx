import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Link, useLocation } from "react-router";

export function BreadCrumb() {
  const location = useLocation();
  const locationNames = location.pathname.split("/").filter((path) => path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {locationNames.length > 0 && <BreadcrumbSeparator />}
        {locationNames.map((link, index) => {
          const to = `/${locationNames.slice(0, index + 1).join("/")}`;
          const linkName = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath = locationNames.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link to={to}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {locationNames.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
