import SiteHeader from "./site-header"; import SiteFooter from "./site-footer"; import ScrollReveal from "./scroll-reveal";
export default function PageShell({children}:{children:React.ReactNode}){return <><SiteHeader/><ScrollReveal/>{children}<SiteFooter/></>}
