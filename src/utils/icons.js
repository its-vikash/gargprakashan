import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const icons = [
  solidIcons.faList,
  solidIcons.faArrowUpLong,
  solidIcons.faArrowLeftLong,
  solidIcons.faArrowRightLong,
  solidIcons.faChevronUp,
  solidIcons.faChevronDown,
  solidIcons.faSearch,
  solidIcons.faPhoneVolume,
  solidIcons.faPhone,
  solidIcons.faEnvelope,
  solidIcons.faLocationDot,
  solidIcons.faQuoteLeft,
  solidIcons.faFlask,
  solidIcons.faBook,
  solidIcons.faClipboard,
  solidIcons.faBullhorn,
  solidIcons.faFileAlt,
  solidIcons.faLightbulb,
  solidIcons.faGraduationCap,
  solidIcons.faDownload,
  brandIcons.faXTwitter,
  brandIcons.faFacebook,
  brandIcons.faInstagram,
  brandIcons.faYoutube,
];

library.add(...icons);