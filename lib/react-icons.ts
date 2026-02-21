// lib/react-icons.ts
import { IconType } from 'react-icons';

// Font Awesome
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode,
  FaBook,
  FaRocket,
  FaLightbulb,
  FaTools,
  FaTerminal,
  FaServer,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaCogs,
  FaFileCode,
  FaSwatchbook 
} from 'react-icons/fa';

// Simple Icons
import { 
  SiJavascript, 
  SiTypescript, 
  SiCplusplus,
  SiC,
  SiRust,
  SiGo,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiRuby,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';

// Material Design
import { 
  MdCode, 
  MdSchool, 
  MdBook,
  MdArticle,
  MdPlayArrow,
  MdVideoLibrary,
  MdBuild,
  MdSettings,
  MdMenuBook 
} from 'react-icons/md';

// Bootstrap Icons
import { 
  BiCodeAlt, 
  BiBook, 
  BiTerminal,
  BiCodeBlock,
  BiGitBranch,
  BiData,
} from 'react-icons/bi';

// Ant Design
import { 
  AiOutlineCode, 
  AiOutlineBook,
  AiOutlineRocket,
  AiOutlineBulb,
  AiOutlineApi,
  AiOutlineCloud,
  AiOutlineDatabase,
  AiOutlineFileText,
} from 'react-icons/ai';


import { GiBookshelf,GiBookmarklet  } from "react-icons/gi";


import { LuCompass,LuWorkflow  } from "react-icons/lu";
import { TbClockBolt } from "react-icons/tb";

export const reactIcons: Record<string, IconType> = {
  // Font Awesome
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode,
  FaBook,
  FaRocket,
  FaLightbulb,
  FaTools,
  FaTerminal,
  FaServer,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaCogs,
  FaFileCode,
  FaSwatchbook,
  
  // Simple Icons
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiRust,
  SiGo,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiRuby,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  
  // Material Design
  MdCode,
  MdSchool,
  MdBook,
  MdArticle,
  MdPlayArrow,
  MdVideoLibrary,
  MdBuild,
  MdSettings,
  MdMenuBook,
  
  // Bootstrap Icons
  BiCodeAlt,
  BiBook,
  BiTerminal,
  BiCodeBlock,
  BiGitBranch,
  BiData,
  
  // Ant Design
  AiOutlineCode,
  AiOutlineBook,
  AiOutlineRocket,
  AiOutlineBulb,
  AiOutlineApi,
  AiOutlineCloud,
  AiOutlineDatabase,
  AiOutlineFileText,


  GiBookshelf ,
  GiBookmarklet ,

  LuCompass,
  LuWorkflow,


  TbClockBolt
};

export type ReactIconName = keyof typeof reactIcons;