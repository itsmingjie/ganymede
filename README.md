# StayPuft

A programming-oriented theme for [Ghost](https://github.com/TryGhost/Ghost). This is the latest development version of StayPuft. If you're just looking to download the latest release, head over to the [releases](https://github.com/dlecina/StayPuft/releases) page.

![screenshot-mockup](/assets/screenshots/screenshot-mockup.png?raw=true)

## Features

* Responsive design.
* Custom [⚡AMP](https://blog.ghost.org/custom-amp-themes/) theme ([ℹ️](https://themes.ghost.org/docs/amp)).
* Post comments using [Disqus](http://disqus.com/).
* In-site search using [GhostHunter](https://github.com/i11ume/ghostHunter).
* Support for [Font Awesome](https://github.com/FortAwesome/Font-Awesome).
* Syntax highlighting using [Prism](https://github.com/LeaVerou/prism/), with Markdown support.

## Demo

This theme is being used in my [blog](http://davidlecina.com/).

*  ["Welcome to Ghost"](http://davidlecina.com/blog/welcome-to-ghost/)
*  ["Using the Ghost editor"](http://davidlecina.com/blog/the-editor/)
*  ["Advanced Markdown tips"](http://davidlecina.com/blog/advanced-markdown/)
*  [Syntax highlighting demo](http://davidlecina.com/blog/prism-demo/)

## Compatibility

**The current StayPuft version is 2.9.3, is tested against Ghost 2.15.0 and is expected to work down to Ghost 2.0.0.**

If the current version of StayPuft is not compatible with the version of Ghost you're running, try looking for an older one in the [Releases section](https://github.com/dlecina/StayPuft/releases).

## Installation

* Clone the repository or download the [latest release](https://github.com/dlecina/StayPuft/releases/latest) and extract it.
* Copy `partials/custom/nav-external.hbs.example` to `partials/custom/nav-external.hbs` and customize it with your own external links.
* (Optional) Copy `partials/custom/disqus.hbs.example` to `partials/custom/disqus.hbs` and customize it with your [Disqus shortname](https://help.disqus.com/installation/whats-a-shortname).
* Run `yarn zip` in the theme's root directory to create `dist/StayPuft.zip`.
* Go to your blog's Settings page (typically `/admin` or `/ghost`).
* In the Design tab, upload and activate StayPuft.
* (Optional) In the Code Injection tab, add any snippets you may need, such as [Google Analytics](https://help.ghost.org/article/16-google-analytics).

## FAQ

1. **Where should I report issues or request a new feature?**

  The appropriate place to report issues or request new features is the [Issues section](https://github.com/dlecina/StayPuft/issues).

2. **Where should I discuss other topics?**

  To discuss other topics, please find an appropriate post in my blog's [Staypuft tag](http://davidlecina.com/blog/tag/staypuft/) and post a comment there.

3. **How can I disable comments?**

  To disable comments, simply remove the line `{{> "post-comments"}}` from `post.hbs` and `page.hbs`. You do not need `disqus.hbs` in this case.

4. **How can I disable comments only on pages?**

  To disable comments only on pages, simply remove the line `{{> "post-comments"}}` from `page.hbs`.

5. **How do I use Syntax Highlighting with Markdown?**

  See the [Syntax highlighting demo](http://davidlecina.com/blog/prism-demo/).

## Development

StayPuft styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

You can keep Ghost running in your [local development environment](https://docs.ghost.org/docs/install-local) by running this from Ghost's root directory:

```bash
nodemon current/index.js --watch content/themes/StayPuft --ext hbs,js,css
```

# Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE).  
Copyright (c) 2014-2019 David Lecina Fuentes - Released under the [MIT license](LICENSE).  
