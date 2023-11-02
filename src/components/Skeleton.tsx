
import ContentLoader from "react-content-loader"

export const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={500}
        viewBox="0 0 400 500"
        backgroundColor="#c7c7c7"
        foregroundColor="#ecebeb"
    >
        <rect x="45" y="16" rx="4" ry="4" width="223" height="264" />
        <rect x="134" y="55" rx="0" ry="0" width="36" height="6" />
        <rect x="90" y="290" rx="2" ry="2" width="131" height="20" />
        <rect x="47" y="321" rx="2" ry="2" width="120" height="39" />
        <rect x="184" y="321" rx="2" ry="2" width="83" height="39" />
    </ContentLoader>
)

export default MyLoader