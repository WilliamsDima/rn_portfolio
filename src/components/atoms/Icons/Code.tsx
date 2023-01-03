import { SVGProps } from "react"

const CodeSvg = (props: SVGProps<SVGSVGElement>) => (
	<svg width={20} height={20} xmlns='http://www.w3.org/2000/svg' {...props}>
		<path d='M5.719 14.75a.997.997 0 0 1-.664-.252L-.005 10l5.341-4.748a1 1 0 0 1 1.328 1.495L3.005 10l3.378 3.002a1 1 0 0 1-.664 1.748zm8.945-.002L20.005 10l-5.06-4.498a.999.999 0 1 0-1.328 1.495L16.995 10l-3.659 3.252a1 1 0 0 0 1.328 1.496zm-4.678 1.417 2-12a1 1 0 1 0-1.972-.329l-2 12a1 1 0 1 0 1.972.329z' />
	</svg>
)

export default CodeSvg
