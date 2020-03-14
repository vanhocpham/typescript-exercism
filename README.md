# TypeScript [![Build Status](https://travis-ci.org/exercism/typescript.svg?branch=master)](https://travis-ci.org/exercism/typescript)

[![N|Solid](https://1.bp.blogspot.com/-6xW4nHPR8H4/XmG_FedoxaI/AAAAAAAACZc/2oqxV3ziJ5Q42GJrZGWW1aGReo0SwyVXACK4BGAYYCw/s1600/vho.png)](https://vanhocpham.blogspot.com/)

Exercism exercises in TypeScript

## Running Unit Test Suite

Yarn must be installed. The official installation steps can be found [here](https://yarnpkg.com/en/docs/install). (Note: installation via npm is not recommended)

Then, `make` commands will install other dependencies as needed.

### All Assignments

    % make test

### Single Assignment

    % make test-assignment ASSIGNMENT=palindrome-products

## Shared Code

Please keep the `common` folder files synced across all the sub folders. These files should be the same across all problems. 

* package.json
* tsconfig.json
* tslint.json
* yarn.lock

There are some utility methods in the `Makefile` to help with development. The below will move the contents of the `common` to all the subfolders. 

	% make replacePackageFilesFromCommonToSubFolders

## Contributing Guide

Please see the [contributing guide](https://github.com/exercism/docs/blob/master/contributing-to-language-tracks/README.md)
