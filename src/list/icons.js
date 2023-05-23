//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaFigma,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp, SiTailwindcss } from "react-icons/si"
import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

const icons = {
  github: <BsGithub />,
  external: <GoLinkExternal />,
  reactjs: <FaReact />,
  nodejs: <FaNodeJs />,
  sass: <FaSass />,
  javascript: <DiJavascript1 />,
  tailwind: <SiTailwindcss />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  csharp: <SiCsharp />,
  git: <FaGit />,
  figma: <FaFigma />,
  mysql: <DiMysql />,
  outsystems: (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 970.82 970.82"
      fill="currentColor"
    >
      <path
        d="M313.54,514.23c9,90.31,85.79,161,179.11,161s170.09-70.74,179.12-161c0-6,1.5-12,1.5-18.07,0-99.33-81.28-179.1-180.62-179.1s-179.11,81.27-179.11,179.1v18.07M8,491.65C8,223.75,224.75,7,492.65,7S978.82,223.75,978.82,491.65,760.57,977.82,492.65,977.82,8,759.57,8,491.65"
        transform="translate(-8 -7)"
      />
    </svg>
  ),
}

export default icons
