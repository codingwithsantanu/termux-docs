# Introduction
Termux is an **Android terminal emulator** which creates a **Linux environment** in your *Android device* without any rooting or additional setup required. It comes with a minmal base system installed automatically which can be expanded easily through it's built-in package manager — `pkg`.

<!-- ## Table of Contents -->
<!-- [[toc]] -->

## History & Evolution
- **Initial Release**: The app was officially launched on **May 30, 2015** by *Fredrik Fornwall* as a lightweight Linux environment for Android.

- **Community Growth**: The projecy is developed actively via Github. Packages and features are contributed through issues, and pull requests.

- **Android Version Support**: As of *January 2020*, the support for Android 5-6 was dropped. The new minimum requirement for the app became **Android 7.0+**.

- **F-Droid vs Google Play**: The last Google Play version (v0.101) was published in *September 2020*. Due to Android 10+ restrictions on executing binaries in app directories, all further official updates have been shifted to F‑Droid and GitHub releases. The links can be found in the [installation section](./installation).

- **Package Hosting Migration**: In *May 2021*, when Bintray was shut down, Termux repositories have been migrated to Hetzner infrastructure to ensure continued package delivery.

## Features
The primary goal of termux is to provide a Linux command line experience to Android devices without any rooting or additional setup required. Some of the main features of termux are as follows:

- **Linux Toolkits**: You can install over 1,000 packages which are compiled for ARM/x86 architectures including *compilers* (C/C++, Rust, Go), *interpreters* (Python, Ruby, Node.js), *editors* (Vim, Emacs), and *utilities* like Git.

- **No Root Required**: You can use termux without worrying about rooting and other additional setups. It uses isolation via PRoot instead of chroot to maintain security.
  > **NOTE**: Although no root is required to run termux, some *additional packages* may require root to run properly.

- **Official Add-Ons**: There are several official add-ons such as **Termux:API** (access to Android features via CLI), **Styling** (custom fonts and themes), and other integrations for extended workflows such as — **Boats**, **Float**, **Widget**, **GUI**, and **Tasker**.