"use client"
import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import AnimatedItem from "../components/AnimatedItem";

export default function CodeIde({ codeIde, setCodeIde }) {
	return (
		<div
			className={`fixed inset-0 z-50 flex items-center h-[calc(100%-72px)] border justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${codeIde ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
		>
			<div className="bg-opacity-100 backdrop-blur-3xl border  border-gray-400 overflow-y-scroll  w-full h-full p-1 rounded-lg shadow-xl  border-opacity-10">
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

				<div className="flex flex-col items-start justify-start  p-5">
					<AnimatedItem animationConfig={{ delay: 0.1 }}>
						<div className="flex flex-col w-full">
							<h1 className="text-white">Moves:</h1>
							<section className="mt-2 text-white">
								<div className="flex justify-center items-center">
									<div className="flex flex-row flex-wrap card-grid ">
										CODE IDE
									</div>
								</div>
							</section>
						</div>
					</AnimatedItem>
				</div>
			</div>
		</div>
	);
}
