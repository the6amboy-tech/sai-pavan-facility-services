import SiteHeader from "./site-header"; import SiteFooter from "./site-footer";
export default function PageShell({children}:{children:React.ReactNode}){return <><SiteHeader/>{children}<SiteFooter/></>}
