import { Helmet } from "react-helmet"
import iconPlantar from '../../assets/imgs/36.png'
const Seo = ({ TitleSite, KeywordsSite, DescriptionSite, Author, urlPlantar }) =>{
    return(
        <>
            <Helmet>
                <title>{TitleSite}</title>
                <meta name="keywords" content={KeywordsSite} />
                <meta name="description" content={DescriptionSite} />
                <meta name="author" content={Author} />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="shortcut icon" href={iconPlantar} type="image/x-icon" />
                <link rel="icon" href={iconPlantar} type="image/x-icon" />
                <link rel="apple-touch-icon" href={iconPlantar} />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                {/*Metas tags Google*/}
                <meta itemProp="name" content={TitleSite} />
                <meta itemProp="description" content={DescriptionSite} />
                <meta itemProp="image" content={iconPlantar} />
                <meta itemProp="image:height" content="500" />
                <meta itemProp="image:width" content="500" />
                <meta itemProp="image:type" content="image/png" />
                <meta itemProp="image:alt" content={TitleSite} />
                <meta itemProp="image:secure_url" content={iconPlantar} />
                {/*Metas tags Facebook*/}
                <meta property="og:url" content={urlPlantar} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={TitleSite} />
                <meta property="og:description" content={DescriptionSite} />
                <meta property="og:image" content={iconPlantar} />
                <meta property="og:image:secure_url" content={iconPlantar} />
            </Helmet>
        </>
    )
}

export default Seo;