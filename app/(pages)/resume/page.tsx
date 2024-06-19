import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import('../_components/pdf-viewer'), { ssr: false })

export default function Resume() {
    return (
        <div>
            <PdfViewer path={"/pdf/danideme.pdf"} />
        </div>
    )
}