let licenseLink;
let licenseBadge;
let licenseSection;
// Renders badge img 
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0':
    return licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GNU General Public License v3.0':
    return licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'MIT License':
    return licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'BSD 2-Clause \"Simplified\" License':
    return licenseBadge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
    return licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
    case 'Boost Software License 1.0':
    return licenseBadge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
    case 'Creative Commons Zero v1.0 Universal':
    return licenseBadge = 'https://licensebuttons.net/l/zero/1.0/80x15.png';
    case 'Eclipse Public License 2.0':
    return licenseBadge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg';
    case 'GNU Affero General Public License v3.0':
    return licenseBadge = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
    case 'GNU General Public License v2.0':
    return licenseBadge = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
    case 'Mozilla Public License 2.0':
    return licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
    case 'The Unlicense':
    return licenseBadge = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    default:
      return licenseBadge= '';
  }
}


// Renders link to license info
function renderLicenseLink(license) {
  
  switch(license){
    case 'Apache License 2.0':
    return licenseLink = 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License v3.0':
    return licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT License':
    return licenseLink = 'https://opensource.org/licenses/MIT';
    case 'BSD 2-Clause \"Simplified\" License':
    return licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
    return licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Boost Software License 1.0':
    return licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
    case 'Creative Commons Zero v1.0 Universal':
    return licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'Eclipse Public License 2.0':
    return licenseLink = 'https://opensource.org/licenses/EPL-1.0';
    case 'GNU Affero General Public License v3.0':
    return licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GNU General Public License v2.0':
    return licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'Mozilla Public License 2.0':
    return licenseLink = 'https://opensource.org/licenses/MPL-2.0';
    case 'The Unlicense':
    return licenseLink = 'http://unlicense.org/';
    default:
      return licenseLink = '';
  }
}

// Generates the info for llicense section of README. 
function renderLicenseSection(license) {
  switch(license){
    case 'Apache License 2.0':
    return licenseSection = 'Apache';
    case 'GNU General Public License v3.0':
    return licenseSection = 'GNU';
    case 'MIT License':
    return licenseSection = 'MIT';
    case 'BSD 2-Clause \"Simplified\" License':
    return licenseSection = 'BSD';
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
    return licenseSection = 'BSD';
    case 'Boost Software License 1.0':
    return licenseSection = 'Boost';
    case 'Creative Commons Zero v1.0 Universal':
    return licenseSection = 'Creative Commons';
    case 'Eclipse Public License 2.0':
    return licenseSection = 'Eclipse';
    case 'GNU Affero General Public License v3.0':
    return licenseSection = 'GNU';
    case 'GNU General Public License v2.0':
    return licenseSection = 'GNU';
    case 'Mozilla Public License 2.0':
    return licenseSection = 'Mozilla';
    case 'The Unlicense':
    return licenseSection = 'The Unlicense';
    default:
      return licenseSection= '';
}
}

// Uses user input from index.js to generate markdown. Also runs the render badge/link/section functions to populate those areas.
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  renderLicenseLink(data.license)
  renderLicenseSection(data.license)
  return `# ${data.title} &middot; [![GitHub license](${licenseBadge})](${licenseLink})   
   
  ${data.description}  
     
  ## Table of Contents  
  &middot; [Installation](#installation)  
  &middot; [Contributing](#contributing)  
  &middot; [Test](#test)  
  &middot; [Questions](#questions)  
  &middot; [License](#license)  
  
  # Installation  
  
  ${data.installation}  
   
  # Contributing  
    
  ${data.contributing}  
   
  # Test  
    
  ${data.test}  
   
  # Questions  
    
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
   
  # License  
    
  This project is <a href="${licenseLink}" target="_blank">${licenseSection}</a> licensed.`  
}



module.exports = {
  generateMarkdown
}
