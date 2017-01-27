# eslint-plugin-only-ascii

ESLint plugin to remove non-ascii characters from JavaScript source code.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-only-ascii`:

```
$ npm install eslint-plugin-only-ascii --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-only-ascii` globally.

## Usage

Add `only-ascii` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "only-ascii"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "only-ascii/rule-name": 2
    }
}
```

## Supported Rules

* [only-ascii/only-ascii](./docs/rules/only-ascii.md): Detect non-ascii characters


# Author
@fand / [amagitakayosi](https://twitter.com/fand)
Hatena Co., Ltd.
