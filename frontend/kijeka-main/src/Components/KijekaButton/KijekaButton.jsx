import React, { useState } from "react";
import Chatbot from "../Chatbot/Chatbot";

function KijekaButton() {
	const [hovering, setHovering] = useState(false);

	return (
		<>
			<div className="flex justify-center items-center fixed right-4 bottom-20 bg-white rounded-full z-50">
				<button className="w-[3.75rem] h-[3.75rem] rounded-[3.75rem] flex justify-center items-center" onClick={() => setHovering(true)}>
					<svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M28.8566 10.2857C29.6143 10.2857 30.3411 10.5867 30.8769 11.1225C31.4127 11.6584 31.7137 12.3851 31.7137 13.1428V18.8571C31.7137 19.6149 31.4127 20.3416 30.8769 20.8774C30.3411 21.4132 29.6143 21.7143 28.8566 21.7143H27.3394C26.9912 24.4761 25.647 27.016 23.5591 28.8571C21.4712 30.6983 18.7832 31.7142 15.9994 31.7143V28.8571C18.2727 28.8571 20.4529 27.9541 22.0604 26.3466C23.6678 24.7392 24.5709 22.559 24.5709 20.2857V11.7143C24.5709 9.44098 23.6678 7.26081 22.0604 5.65335C20.4529 4.0459 18.2727 3.14284 15.9994 3.14284C13.7262 3.14284 11.546 4.0459 9.93853 5.65335C8.33107 7.26081 7.42801 9.44098 7.42801 11.7143V21.7143H3.1423C2.38454 21.7143 1.65781 21.4132 1.12199 20.8774C0.586176 20.3416 0.285156 19.6149 0.285156 18.8571V13.1428C0.285156 12.3851 0.586176 11.6584 1.12199 11.1225C1.65781 10.5867 2.38454 10.2857 3.1423 10.2857H4.65944C5.00806 7.52412 6.35241 4.98465 8.44026 3.1438C10.5281 1.30295 13.2159 0.287231 15.9994 0.287231C18.7829 0.287231 21.4708 1.30295 23.5586 3.1438C25.6465 4.98465 26.9908 7.52412 27.3394 10.2857H28.8566ZM9.9423 21.4071L11.4566 18.9843C12.8181 19.8372 14.3928 20.2883 15.9994 20.2857C17.6061 20.2883 19.1808 19.8372 20.5423 18.9843L22.0566 21.4071C20.2412 22.5445 18.1416 23.1461 15.9994 23.1428C13.8572 23.1461 11.7576 22.5445 9.9423 21.4071Z"
							fill="#004B95"
						/>
					</svg>
					{hovering && <Chatbot />}
				</button>
			</div>
			<div className="fixed right-4 bottom-[150px] flex items-center justify-center z-50">
				<div
					className="bg-white rounded-full p-3 cursor-pointer transition-all duration-300"
					id="open"
					onClick={() => {
						//open
						document.getElementById("open").classList.add("scale-0");
						document.getElementById("open").classList.add("opacity-0");

						//close
						document.getElementById("close").classList.remove("top-0");
						document.getElementById("close").classList.remove("left-0");
						document.getElementById("close").classList.remove("opacity-0");
						document.getElementById("close").classList.remove("scale-0");
						document.getElementById("close").classList.add("-top-8");
						document.getElementById("close").classList.add("-left-12");

						//instagram
						document.getElementById("instagram").classList.remove("top-0");
						document.getElementById("instagram").classList.remove("left-0");
						document.getElementById("instagram").classList.remove("opacity-0");
						document.getElementById("instagram").classList.remove("scale-0");
						document.getElementById("instagram").classList.add("-top-24");
						document.getElementById("instagram").classList.add("-left-12");

						//twitter
						document.getElementById("twitter").classList.remove("top-0");
						document.getElementById("twitter").classList.remove("left-0");
						document.getElementById("twitter").classList.remove("opacity-0");
						document.getElementById("twitter").classList.remove("scale-0");
						document.getElementById("twitter").classList.add("-top-16");
						document.getElementById("twitter").classList.add("left-1");

						//youtube
						document.getElementById("youtube").classList.remove("top-0");
						document.getElementById("youtube").classList.remove("left-0");
						document.getElementById("youtube").classList.remove("opacity-0");
						document.getElementById("youtube").classList.remove("scale-0");
						document.getElementById("youtube").classList.add("-top-1");
						document.getElementById("youtube").classList.add("left-1");

						//linkedin
						document.getElementById("linkedin").classList.remove("top-0");
						document.getElementById("linkedin").classList.remove("left-0");
						document.getElementById("linkedin").classList.remove("opacity-0");
						document.getElementById("linkedin").classList.remove("scale-0");
						document.getElementById("linkedin").classList.add("top-8");
						document.getElementById("linkedin").classList.add("-left-12");

						//pintrest
						document.getElementById("pintrest").classList.remove("top-0");
						document.getElementById("pintrest").classList.remove("left-0");
						document.getElementById("pintrest").classList.remove("opacity-0");
						document.getElementById("pintrest").classList.remove("scale-0");
						document.getElementById("pintrest").classList.add("-top-1");
						document.getElementById("pintrest").classList.add("-left-[100px]");

						//facebook
						document.getElementById("facebook").classList.remove("top-0");
						document.getElementById("facebook").classList.remove("left-0");
						document.getElementById("facebook").classList.remove("opacity-0");
						document.getElementById("facebook").classList.remove("scale-0");
						document.getElementById("facebook").classList.add("-top-16");
						document.getElementById("facebook").classList.add("-left-[100px]");
					}}
				>
					<img src="/images/icon.png" className="h-9 w-9" />
				</div>
				<div className="">
					<div
						className="bg-white rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300"
						id="close"
						onClick={() => {
							//open
							document.getElementById("open").classList.remove("scale-0");
							document.getElementById("open").classList.remove("opacity-0");

							//close
							document.getElementById("close").classList.add("top-0");
							document.getElementById("close").classList.add("left-0");
							document.getElementById("close").classList.add("opacity-0");
							document.getElementById("close").classList.add("scale-0");
							document.getElementById("close").classList.remove("-top-8");
							document.getElementById("close").classList.remove("-left-12");

							//instagram
							document.getElementById("instagram").classList.add("top-0");
							document.getElementById("instagram").classList.add("left-0");
							document.getElementById("instagram").classList.add("opacity-0");
							document.getElementById("instagram").classList.add("scale-0");
							document.getElementById("instagram").classList.remove("-top-24");
							document.getElementById("instagram").classList.remove("-left-12");

							//twitter
							document.getElementById("twitter").classList.add("top-0");
							document.getElementById("twitter").classList.add("left-0");
							document.getElementById("twitter").classList.add("opacity-0");
							document.getElementById("twitter").classList.add("scale-0");
							document.getElementById("twitter").classList.remove("-top-16");
							document.getElementById("twitter").classList.remove("left-1");

							//youtube
							document.getElementById("youtube").classList.add("top-0");
							document.getElementById("youtube").classList.add("left-0");
							document.getElementById("youtube").classList.add("opacity-0");
							document.getElementById("youtube").classList.add("scale-0");
							document.getElementById("youtube").classList.remove("-top-1");
							document.getElementById("youtube").classList.remove("left-1");

							//linkedin
							document.getElementById("linkedin").classList.add("top-0");
							document.getElementById("linkedin").classList.add("left-0");
							document.getElementById("linkedin").classList.add("opacity-0");
							document.getElementById("linkedin").classList.add("scale-0");
							document.getElementById("linkedin").classList.remove("top-8");
							document.getElementById("linkedin").classList.remove("-left-12");

							//pintrest
							document.getElementById("pintrest").classList.add("top-0");
							document.getElementById("pintrest").classList.add("left-0");
							document.getElementById("pintrest").classList.add("opacity-0");
							document.getElementById("pintrest").classList.add("scale-0");
							document.getElementById("pintrest").classList.remove("-top-1");
							document.getElementById("pintrest").classList.remove("-left-[100px]");

							//facebook
							document.getElementById("facebook").classList.add("top-0");
							document.getElementById("facebook").classList.add("left-0");
							document.getElementById("facebook").classList.add("opacity-0");
							document.getElementById("facebook").classList.add("scale-0");
							document.getElementById("facebook").classList.remove("-top-16");
							document.getElementById("facebook").classList.remove("-left-[100px]");
						}}
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
							<path d="M0.321105 10C0.321105 9.43644 0.777957 8.97959 1.34151 8.97959L8.97956 8.97959L8.97956 1.34155C8.97956 0.777991 9.43641 0.321138 9.99997 0.321139C10.5635 0.321138 11.0204 0.77799 11.0204 1.34155L11.0204 8.97959H18.6584C19.222 8.97959 19.6788 9.43644 19.6788 10C19.6788 10.5636 19.222 11.0204 18.6584 11.0204H11.0204L11.0204 18.6585C11.0204 19.222 10.5635 19.6789 9.99997 19.6789C9.43641 19.6789 8.97956 19.222 8.97956 18.6585L8.97956 11.0204L1.34151 11.0204C0.777957 11.0204 0.321105 10.5636 0.321105 10Z" fill="#004B95" />
						</svg>
					</div>
					<div className="bg-kijeka-blue rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-150" id="instagram">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 0.239258C15.1954 0.239258 15.5941 0.251018 16.8478 0.309822C18.1003 0.368626 18.953 0.565031 19.7033 0.856697C20.4795 1.15542 21.1334 1.55999 21.7873 2.21271C22.3853 2.80063 22.8481 3.51179 23.1433 4.29672C23.4338 5.04588 23.6314 5.89971 23.6902 7.15223C23.7455 8.40592 23.7608 8.80461 23.7608 12C23.7608 15.1954 23.749 15.5941 23.6902 16.8478C23.6314 18.1003 23.4338 18.953 23.1433 19.7033C22.8489 20.4887 22.3861 21.2 21.7873 21.7873C21.1992 22.3851 20.4881 22.8478 19.7033 23.1433C18.9541 23.4338 18.1003 23.6314 16.8478 23.6902C15.5941 23.7455 15.1954 23.7608 12 23.7608C8.80461 23.7608 8.40592 23.749 7.15223 23.6902C5.89971 23.6314 5.04705 23.4338 4.29672 23.1433C3.51148 22.8487 2.80019 22.3859 2.21271 21.7873C1.61457 21.1995 1.15181 20.4883 0.856697 19.7033C0.565031 18.9541 0.368626 18.1003 0.309822 16.8478C0.254547 15.5941 0.239258 15.1954 0.239258 12C0.239258 8.80461 0.251018 8.40592 0.309822 7.15223C0.368626 5.89853 0.565031 5.04705 0.856697 4.29672C1.15099 3.51131 1.61386 2.79995 2.21271 2.21271C2.80036 1.61436 3.5116 1.15157 4.29672 0.856697C5.04705 0.565031 5.89853 0.368626 7.15223 0.309822C8.40592 0.254547 8.80461 0.239258 12 0.239258ZM12 6.11963C10.4404 6.11963 8.94474 6.73917 7.84196 7.84196C6.73917 8.94474 6.11963 10.4404 6.11963 12C6.11963 13.5596 6.73917 15.0553 7.84196 16.1581C8.94474 17.2609 10.4404 17.8804 12 17.8804C13.5596 17.8804 15.0553 17.2609 16.1581 16.1581C17.2609 15.0553 17.8804 13.5596 17.8804 12C17.8804 10.4404 17.2609 8.94474 16.1581 7.84196C15.0553 6.73917 13.5596 6.11963 12 6.11963ZM19.6445 5.82562C19.6445 5.43572 19.4896 5.0618 19.2139 4.7861C18.9382 4.51041 18.5643 4.35552 18.1744 4.35552C17.7845 4.35552 17.4106 4.51041 17.1349 4.7861C16.8592 5.0618 16.7043 5.43572 16.7043 5.82562C16.7043 6.21551 16.8592 6.58943 17.1349 6.86513C17.4106 7.14083 17.7845 7.29571 18.1744 7.29571C18.5643 7.29571 18.9382 7.14083 19.2139 6.86513C19.4896 6.58943 19.6445 6.21551 19.6445 5.82562ZM12 8.47179C12.9358 8.47179 13.8332 8.84351 14.4948 9.50518C15.1565 10.1668 15.5282 11.0643 15.5282 12C15.5282 12.9358 15.1565 13.8332 14.4948 14.4948C13.8332 15.1565 12.9358 15.5282 12 15.5282C11.0643 15.5282 10.1668 15.1565 9.50518 14.4948C8.84351 13.8332 8.47179 12.9358 8.47179 12C8.47179 11.0643 8.84351 10.1668 9.50518 9.50518C10.1668 8.84351 11.0643 8.47179 12 8.47179Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="bg-[#37A945] rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-200" id="twitter">
						<svg width="20" height="20" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M22.4203 5.87156C22.4355 6.0903 22.4355 6.30909 22.4355 6.52783C22.4355 13.1997 17.4863 20.8872 8.44053 20.8872C5.65371 20.8872 3.06489 20.059 0.887207 18.6216C1.28316 18.6685 1.66384 18.6841 2.07502 18.6841C4.37449 18.6841 6.49128 17.8872 8.18164 16.5279C6.0192 16.481 4.207 15.0278 3.58262 13.0278C3.88721 13.0747 4.19177 13.1059 4.5116 13.1059C4.95321 13.1059 5.39487 13.0434 5.80601 12.9341C3.5522 12.4653 1.86179 10.4341 1.86179 7.98095V7.91847C2.51659 8.29347 3.27808 8.52784 4.08513 8.55906C2.76025 7.65279 1.89226 6.10593 1.89226 4.35592C1.89226 3.41844 2.13587 2.55906 2.56229 1.80906C4.98363 4.87156 8.62325 6.87152 12.7044 7.09031C12.6283 6.71531 12.5826 6.32472 12.5826 5.93409C12.5826 3.15281 14.7755 0.887207 17.5014 0.887207C18.9177 0.887207 20.1968 1.49658 21.0953 2.48096C22.207 2.26222 23.273 1.84032 24.2172 1.26221C23.8516 2.43411 23.075 3.41849 22.0547 4.04344C23.0446 3.93412 24.004 3.65281 24.8872 3.26222C24.2173 4.26218 23.3797 5.15277 22.4203 5.87156Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="bg-kijeka-blue rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-[250ms]" id="youtube">
						<svg width="20" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.0072 17.2467H11.9837C11.9108 17.2467 4.61558 17.2326 2.77502 16.7328C1.76291 16.4601 0.972506 15.6693 0.700422 14.657C0.369449 12.7898 0.209624 10.8963 0.222936 9.0001C0.214385 7.10076 0.378535 5.20457 0.713359 3.33495C0.992921 2.32178 1.77986 1.52726 2.79031 1.23801C4.58029 0.767578 11.6744 0.767578 11.9755 0.767578H12.0002C12.0742 0.767578 19.3883 0.781691 21.21 1.28152C22.22 1.55556 23.0088 2.34481 23.2822 3.35494C23.6238 5.22907 23.784 7.13172 23.7609 9.03656C23.7691 10.9336 23.6046 12.8275 23.2693 14.6947C22.9937 15.7057 22.2028 16.4948 21.1912 16.7681C19.4035 17.242 12.3083 17.2467 12.0072 17.2467ZM9.65506 5.47776L9.64918 12.5342L15.7789 9.00599L9.65506 5.47776Z" fill="white" />
						</svg>
					</div>
					<div className="bg-[#37A945] rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-300" id="linkedin">
						<svg width="20" height="20" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.04927 2.76763C5.04896 3.39146 4.80085 3.98962 4.35951 4.43051C3.91818 4.8714 3.31977 5.11892 2.69595 5.11861C2.07212 5.1183 1.47396 4.87018 1.03307 4.42885C0.592175 3.98751 0.344659 3.38911 0.344971 2.76528C0.345283 2.14145 0.593397 1.5433 1.03473 1.1024C1.47607 0.661511 2.07447 0.413995 2.6983 0.414307C3.32213 0.414619 3.92028 0.662733 4.36118 1.10407C4.80207 1.5454 5.04958 2.1438 5.04927 2.76763ZM5.11984 6.86037H0.415535V21.5848H5.11984V6.86037ZM12.5526 6.86037H7.87185V21.5848H12.5056V13.858C12.5056 9.55359 18.1155 9.15372 18.1155 13.858V21.5848H22.761V12.2586C22.761 5.00218 14.4579 5.27267 12.5056 8.83618L12.5526 6.86037Z" fill="white" />
						</svg>
					</div>
					<div className="bg-[#37A945] rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-[350ms]" id="facebook">
						<svg width="20" height="20" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.889893 15.0028C0.891535 21.9455 5.94006 27.8569 12.7969 28.9449V19.0814H9.21651V15.0028H12.8012V11.898C12.6409 10.4268 13.1435 8.9605 14.1724 7.89687C15.2014 6.83323 16.6503 6.28247 18.126 6.39394C19.1852 6.41105 20.2418 6.50538 21.2873 6.6762V10.1466H19.5034C18.8893 10.0661 18.2718 10.269 17.8251 10.6979C17.3783 11.1269 17.1505 11.7355 17.2058 12.3524V15.0028H21.1165L20.4913 19.0828H17.2058V28.9449C24.6214 27.773 29.8215 21.0005 29.0388 13.5338C28.2561 6.06704 21.7647 0.520049 14.2673 0.911328C6.76984 1.30261 0.891084 7.49518 0.889893 15.0028Z" fill="white" />
						</svg>
					</div>
					<div className="bg-kijeka-blue rounded-full p-3 cursor-pointer absolute top-0 left-0 opacity-0 scale-0 transition-all duration-300 delay-[400ms]" id="pintrest">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.6114 0.350015C10.7974 -0.0370851 7.93829 0.607048 5.56213 2.16347C3.18596 3.7199 1.45318 6.0835 0.683736 8.81783C-0.0857075 11.5522 0.160157 14.4726 1.37593 17.0398C2.5917 19.607 4.69528 21.6476 7.29822 22.7848C7.22783 21.8814 7.29244 20.9725 7.48992 20.0881C7.70749 19.1014 9.01411 13.6632 9.01411 13.6632C8.75393 13.08 8.6239 12.4471 8.63306 11.8085C8.63306 10.062 9.64096 8.75895 10.8947 8.75895C11.1199 8.75567 11.3432 8.80093 11.5493 8.89165C11.7555 8.98237 11.9397 9.11642 12.0895 9.28469C12.2392 9.45295 12.351 9.65149 12.4172 9.8668C12.4833 10.0821 12.5024 10.3092 12.473 10.5325C12.473 11.5909 11.7932 13.1928 11.438 14.6958C11.3678 14.9714 11.3634 15.2597 11.425 15.5374C11.4866 15.8151 11.6127 16.0744 11.7929 16.2945C11.9731 16.5145 12.2025 16.6892 12.4626 16.8043C12.7227 16.9195 13.0062 16.9719 13.2903 16.9574C15.5225 16.9574 17.0185 14.0983 17.0185 10.723C17.0185 8.13563 15.3049 6.19746 12.146 6.19746C11.3902 6.16809 10.6364 6.29263 9.9302 6.56352C9.22402 6.8344 8.58027 7.24599 8.03803 7.77327C7.49579 8.30056 7.06636 8.93254 6.77583 9.63086C6.4853 10.3292 6.33973 11.0793 6.34795 11.8356C6.31428 12.6745 6.58493 13.4973 7.11005 14.1524C7.20817 14.2257 7.27982 14.3288 7.31418 14.4464C7.34855 14.5639 7.34377 14.6894 7.30057 14.804C7.24647 15.0204 7.11005 15.5367 7.05595 15.726C7.04469 15.7902 7.01852 15.8509 6.97953 15.9032C6.94054 15.9554 6.88982 15.9978 6.83147 16.0268C6.77312 16.0559 6.70875 16.0708 6.64356 16.0705C6.57837 16.0701 6.51418 16.0545 6.45615 16.0247C4.82846 15.3732 4.06166 13.582 4.06166 11.5368C4.06166 8.18856 6.86542 4.18049 12.4753 4.18049C16.9397 4.18049 19.9081 7.44645 19.9081 10.9394C19.9081 15.5367 17.3478 18.9932 13.5643 18.9932C12.9989 19.0112 12.438 18.8864 11.9335 18.6303C11.4291 18.3742 10.9973 17.995 10.6783 17.5278C10.6783 17.5278 9.99849 20.2516 9.86442 20.7667C9.59073 21.6566 9.18689 22.5012 8.66599 23.2729C9.75151 23.6022 10.8794 23.7668 12.0131 23.7621C13.558 23.7634 15.0879 23.4599 16.5153 22.869C17.9427 22.2781 19.2396 21.4115 20.3316 20.3187C21.4236 19.226 22.2893 17.9285 22.8792 16.5007C23.469 15.0729 23.7715 13.5427 23.7692 11.9979C23.7677 9.15764 22.7387 6.41385 20.872 4.27314C19.0054 2.13243 16.4273 0.739371 13.6137 0.351191L13.6114 0.350015Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				className="fixed right-5 bottom-4 flex items-center justify-center z-50"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<div className="bg-white rounded-full p-3 cursor-pointer transition-all duration-300">
					<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 25C13 26.1046 13.8954 27 15 27C16.1046 27 17 26.1046 17 25H13ZM16.4142 0.585787C15.6332 -0.195263 14.3668 -0.195263 13.5858 0.585787L0.857864 13.3137C0.0768156 14.0948 0.0768156 15.3611 0.857864 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585787ZM17 25L17 2H13L13 25H17Z" fill="#004B95" />
					</svg>
				</div>
			</div>
		</>
	);
}

export default KijekaButton;
