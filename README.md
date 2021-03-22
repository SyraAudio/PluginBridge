<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** SyraAudio, PluginBridge, twitter_handle, admin@syra.live, Syra PluginBridge, A Typescript module that allows Soul Developers to interact with Syra and provide a UI.

Topics
Resources

-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SyraAudio/PluginBridge">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Syra PluginBridge</h3>

  <p align="center">
    A Typescript module that allows Soul Developers to interact with Syra and provide a UI.
    <br />
    <a href="https://github.com/SyraAudio/PluginBridge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SyraAudio/PluginBridge">View Demo</a>
    ·
    <a href="https://github.com/SyraAudio/PluginBridge/issues">Report Bug</a>
    ·
    <a href="https://github.com/SyraAudio/PluginBridge/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The Syra PluginBridge enables you to communicate with the Syra DAW and provide a custom UI to your plugin.

<!-- GETTING STARTED -->
## Getting Started

### Traditional Web UI

If you want to create a traditional web UI (using frameworks like React or Angular), you have to provide an index.html in your package.
This will then get loaded by Syra inside an iFrame. If you are using this approach we highly recommend building
the UI with [Svelte](https://svelte.dev/), since it is a compile-time framework that compiles to a small footprint
and high performance vanilla JavaScript package.

### Modern WebGL approach

If you have a lot of real time moving parts in your UI, you might want to consider providing a canvas WebGL based UI instead.
To connect this to Syra, just provide a JavaScript file which is called worker.js.
Syra will execute this in a web worker upon start.

### Prerequisites

Coming soon...

### Installation

1. Install NPM packages
   ```sh
   npm install @syra-audio/plugin-bridge
   # or
   yarn install @syra-audio/plugin-bridge
   ```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/SyraAudio/PluginBridge/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - admin@syra.live

Project Link: [https://github.com/SyraAudio/PluginBridge](https://github.com/SyraAudio/PluginBridge)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/SyraAudio/PluginBridge.svg?style=for-the-badge
[contributors-url]: https://github.com/SyraAudio/PluginBridge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SyraAudio/PluginBridge.svg?style=for-the-badge
[forks-url]: https://github.com/SyraAudio/PluginBridge/network/members
[stars-shield]: https://img.shields.io/github/stars/SyraAudio/PluginBridge.svg?style=for-the-badge
[stars-url]: https://github.com/SyraAudio/PluginBridge/stargazers
[issues-shield]: https://img.shields.io/github/issues/SyraAudio/PluginBridge.svg?style=for-the-badge
[issues-url]: https://github.com/SyraAudio/PluginBridge/issues
[license-shield]: https://img.shields.io/github/license/SyraAudio/PluginBridge.svg?style=for-the-badge
[license-url]: https://github.com/SyraAudio/PluginBridge/blob/master/LICENSE
