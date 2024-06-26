<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<h3>This is still a work in progress.</h3>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">EAT!</h3>

  <p align="center">
    For when you and your friends can't decide where to go for dinner. It's like Kahoot vibes, but for restaurants.
    <br />
    <a href="https://github.com/ahuisinga/fun-spotify-app"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Next][Next.js]][Next-url]
- [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- [![Prisma][Prisma]][Prisma-url]
- [![DaisyUI][DaisyUI]][DaisyUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Setup a MongoDB project (I recommend [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database))
  - Make note of your connection URL

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ahuisinga/meal-vote-app.git
   ```
2. Install Node packages
   ```sh
   npm install
   ```
3. Create a `.env` file at the root of the project. Update the variables with your MongoDB details. Ex:
   ```js
   DATABASE_URL = "mongodb+srv://ABCDEFGHIJKLMNOP";
   ```
4. Generate your Prisma client (See docs: [Prisma with MongoDB docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/install-prisma-client-typescript-mongodb))
   ```sh
   npx prisma generate
   ```
5. Start a dev sever. Should open at https://localhost:3000
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

As mentioned, this is still a work in progress. But if everything is setup correctly, you should be able to start a new group voting session on your local machine and vote on some mock restaurants. You can open the app from an incognito browser to join the same group as a second user.

The goal for this app is to grab open restaurants nearby to the starting user via the Google Maps API. Then users can join the same session and vote to decide where to eat. Other features I'm considering are letting users filter the restaurants, for example by price. Or creating user accounts to store info about their most voted restaurants.

The vision in my head is Kahoot! vibes but for voting on meal options instead of trivia. ¯\\\_(ツ)\_/¯

Join a Group
![Join Group Screenshot][join-screenshot]

Vote on a place
![Vote Screenshot][vote-screenshot]

Results page
![Results Screenshot][results-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Potentially on the Roadmap

- [ ] Generate QR code for users to scan. Or share a link. Instead of just copying the group code
- [ ] Connect to the Google Maps API instead of only mocked data
- [ ] Filter restaurants options for the group session
- [ ] Stored user accounts instead of only anonymous sessions

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- Thank you to anyone who has ever asked me "Where should we go?" and sent me into a panic.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[contributors-url]: https://github.com/ahuisinga/fun-spotify-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[forks-url]: https://github.com/ahuisinga/fun-spotify-app/network/members
[stars-shield]: https://img.shields.io/github/stars/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[stars-url]: https://github.com/ahuisinga/fun-spotify-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[issues-url]: https://github.com/ahuisinga/fun-spotify-app/issues
[license-shield]: https://img.shields.io/github/license/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[license-url]: https://github.com/ahuisinga/fun-spotify-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/annahuisinga
[product-screenshot]: /project-images/home_screenshot.png
[join-screenshot]: /project-images/join_screenshot.png
[vote-screenshot]: /project-images/vote_screenshot.png
[results-screenshot]: /project-images/results_screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-white?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[TailwindCSS-url]: https://tailwindcss.com
[TypeScript.com]: https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[HeadlessUI]: https://img.shields.io/badge/headless_ui-%2366E3FF?style=for-the-badge&logo=headlessui&logoColor=white
[HeadlessUI-url]: https://headlessui.com/v1
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb
[MongoDB-url]: https://www.mongodb.com/docs/guides/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma
[Prisma-url]: https://www.prisma.io/docs
[DaisyUI]: https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui
[DaisyUI-url]: https://daisyui.com/docs/install/
