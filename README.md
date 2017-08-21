# vscode-language-csjs
> A CSJS syntax highlighter for Visual Studio Code.

![Example](/assets/example.png)

## Introduction

[CSJS](https://github.com/rtsao/csjs) is a JavaScript library that lets you write inline CSS in your JavaScript code. The CSS goes in a string, however, so you don't get any syntax highlighting. This extension adds regular CSS highlighting inside any CSJS block.

## Installation

You can find it on the [Extensions Marketplace](https://marketplace.visualstudio.com/vscode) under the name `CSJS Syntax Highlighter`.

## Usage

This extension will automatically highlight any file with the extension `.csjs.js`. You can also use `Change Language Mode` from the Command Palette to set the mode manually.

## License

MIT license. See [LICENSE](/license) for more details.

## Credit

This extension is a partial port of [language-csjs](https://github.com/neurosnap/language-csjs).


## What I Changed

`csjs.tmLanguage.json` is extremely similar to [css.tmLanguage.json](https://github.com/Microsoft/vscode/blob/cc5e2fb18d6288fb70a626ea93ae150293c56fe7/extensions/css/syntaxes/css.tmLanguage.json) file from Visual Studio Code. I added the `expression` rule from language-csjs to `repositories` and added it to `#rule-list-innards` in two places. I also made a similar rule at the top level to detect unscoped `${}` blocks.