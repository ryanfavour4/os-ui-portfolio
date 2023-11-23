import React, { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import Editor from "@monaco-editor/react";
import { BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { FiChevronsDown } from "react-icons/fi";

const files = {
	"index.html": {
		name: "index.html",
		language: "html",
		value: `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VS-CODY</title>
</head>

<body>
  <!-- WRITE CODE IN HERE -->
  <!-- RYANFAVOUR4 -->
  <h1>Hello World</h1>
</body>

</html>
`,
	},
	"script.js": {
		name: "script.js",
		language: "javascript",
		value: "console.log('Hello, World!');",
	},
	"style.css": {
		name: "style.js",
		language: "css",
		value: `body {
	background-color: #f1f1f1;
};`,
	},
};

export default function CodeIde({ codeIde, setCodeIde }) {
	const [fileName, setFileName] = useState("script.js");
	const file = files[fileName];
	const editorRef = useRef(null);
	const [srcDoc, setSrcDoc] = useState("");

	const handleEditorDidMount = (editor, _monaco) => {
		editorRef.current = editor;
		setSrcDoc(`<!DOCTYPE html>
			<html>
			  <head>
			    <style>${files["style.css"].value}</style>
			  </head>
			  <body>
			  	${files["index.html"].value}
			    <script defer>${files["script.js"].value}</script>
			  </body>
			</html>`);
	};

	function showValue() {
		files[fileName].value = editorRef.current.getValue();
		setSrcDoc(`<!DOCTYPE html>
		<html>
			<head>
			  <style>${files["style.css"].value}</style>
			</head>
			<body>
			  	${files["index.html"].value}
			    <script defer>${files["script.js"].value}</script>
			</body>
		</html>`);
	}

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				setCodeIde(false);
			}
		})
	}, []);


	return (
		<div
			className={`fixed inset-0 z-50 flex items-center h-[calc(100 % -70px)] min-h-[550px] justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${codeIde ? "opacity-100 visible" : "opacity-0 invisible"
				} `}
		>
			<div className="bg-opacity-100 backdrop-blur-3xl overflow-y-scroll  w-full h-full p-1 rounded-lg shadow-xl  border-opacity-10">
				<div className="flex">
					<MdOutlineClose
						className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
						onClick={() => {
							const audio = new Audio("click.wav");
							audio.play();
							setCodeIde(false);
						}}
					/>
				</div>
				<CodeSection
					file={file}
					fileName={fileName}
					setFileName={setFileName}
					handleEditorDidMount={handleEditorDidMount}
					showValue={showValue}
				/>
				<PreviewSection srcDoc={srcDoc} />
			</div>
		</div>
	);
}

const CodeSection = ({
	file,
	fileName,
	setFileName,
	handleEditorDidMount,
	showValue,
}) => {
	return (
		<div className="flex flex-col items-start h-full justify-start">
			<div className="flex gap-[.1rem] pb-1 bg-[#141414] w-full">
				<button title="Save" className="p-1 px-4 text-lg text-white" onClick={() => showValue()}><IoMdSave /></button>
				<button
					className={`flex items-center gap-2 text-white p-1 px-4 border-2 border-[#141414] ${fileName == "script.js"
						? "bg-[#141414]  border-b-yellow-300"
						: "bg-[#1e1e1e]"
						} `}
					onClick={() => setFileName("script.js")}
				>
					<BiLogoJavascript className="text-yellow-500 text-xl" />
					<p>script.js</p>
				</button>

				<button
					className={`flex items-center gap-2 text-white p-1 px-4 border-2 border-[#141414] ${fileName == "index.html"
						? "bg-[#141414] border-b-yellow-300"
						: "bg-[#1e1e1e]"
						} `}
					onClick={() => setFileName("index.html")}
				>
					<AiFillHtml5 className="text-[#eb493b] text-lg" />
					<p>index.html</p>
				</button>

				<button
					className={`flex items-center gap-2 text-white p-1 px-4 border-2 border-[#141414] ${fileName == "style.css"
						? "bg-[#141414]  border-b-yellow-300"
						: "bg-[#1e1e1e]"
						} `}
					onClick={() => setFileName("style.css")}
				>
					<FaCss3 className="text-[#306af1] text-base" />
					<p>style.css</p>
				</button>
			</div>
			<Editor
				className="py-4 bg-[#1e1e1e]"
				theme="vs-dark"
				language={file.language}
				defaultValue={file.value}
				value={file.value}
				defaultLanguage={file.language}
				path={file.name}
				height={"100%"}
				onMount={handleEditorDidMount}
			/>
		</div>
	);
};

const PreviewSection = ({ srcDoc }) => {
	const [showPreview, setShowPreview] = useState(false);
	return (
		<div className="absolute right-0 top-5 bottom-5 h-[calc(100vh-65px)] mt-[60px] w-2/5">
			<div onClick={() => setShowPreview(!showPreview)} className="cursor-pointer bg-[#141414] p-1 text-white text-center text-xl w-full border-slate-400 border-2 flex items-center justify-center">
				<FiChevronsDown />
			</div>
			<iframe
				title="output"
				srcDoc={srcDoc}
				width="100%"
				height={showPreview ? "100%" : "0%"}
				sandbox="allow-scripts"
			/>
		</div>
	);
};
