import { useRef, useState } from "react"
import { colorizedCodeSnippet } from "../../utils/colorizedCodeSnippet"

const ArticleCodeSnippet = ({ snippet }: { snippet: string }) => {

    const [open, setOpen] = useState<boolean>(false);

    const codeSnippetRef = useRef<HTMLDivElement>(null);
    const codeSnippetPreRef = useRef<HTMLPreElement>(null);
    const codeRef = useRef<HTMLElement>(null);

    const collapse = () => {
        if (codeRef.current && codeSnippetPreRef.current) {
            if (codeRef.current?.clientHeight! > 250) {
                codeRef.current.style.maxHeight = '250px';
                codeSnippetPreRef.current.style.overflow = "hidden"
                codeSnippetPreRef.current.scrollLeft = 0;
                setOpen(false)
            }
            else {
                codeRef.current.style.maxHeight = 'unset';
                codeSnippetPreRef.current.style.overflow = "auto"
                setOpen(true)
            }
        }
    }

    return (
        <div className="code-snippet" ref={codeSnippetRef}>
            <pre className="" style={{
                overflow: codeSnippetPreRef.current?.clientHeight! > 250 ? "hidden" : "auto",
            }} ref={codeSnippetPreRef}>
                <code ref={codeRef}
                    dangerouslySetInnerHTML={{
                        __html:
                            colorizedCodeSnippet(snippet)
                    }}>
                </code>
            </pre>
            {
                codeSnippetPreRef.current?.clientHeight! > 250 &&
                <h1 style={{
                    position: open ? "relative" : "absolute",
                    backgroundImage: open ?
                        "unset"
                        :
                        "linear-gradient(to bottom,  rgba(0,0,0,0), rgba(0,0,0) 80%)",
                    marginTop: open ? "10px" : ""
                }} className="see-more color-white" onClick={collapse}>{open ? "See less" : "See more..."}</h1>
            }
        </div >
    )
}

export default ArticleCodeSnippet