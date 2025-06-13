import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faBook,
  faClipboard,
  faBullhorn,
  faFileAlt,
  faLightbulb,
  faGraduationCap,
  faDownload,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { label: "College Lab Mannuals (English)", icon: faFlask },
  { label: "College Lab Mannuals (Hindi)", icon: faFlask },
  { label: "School Lab Mannuals (English)", icon: faBook },
  { label: "School Lab Mannuals (Hindi)", icon: faBook },
  { label: "Latest Publications", icon: faBullhorn },
  { label: "Recent Government Circulars", icon: faFileAlt },
  { label: "Guides & Practice Papers", icon: faLightbulb },
  { label: "MP Board Preparation Materials", icon: faGraduationCap },
  { label: "Download Catalogues", icon: faDownload },
];

const Sidebar = () => {
  return (
    <aside className="z-10 relative bg-white border-2 border-t-0 border-red-600 rounded-b-xl shadow-sm overflow-hidden">
      <ul className="divide-y divide-gray-100">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="px-6 py-3 hover:bg-red-50 text-sm flex items-center text-gray-700 transition-all duration-200"
          >
            <a href="#">
              <FontAwesomeIcon icon={cat.icon || faArrowRightLong} className="mr-2 text-lg text-gray-300" />
              <span>{cat.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
