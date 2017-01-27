# Prevent non-asciii characters (only-ascii)

DisplayName allows you to name your component. This name is used by React in debugging messages.

## Rule Details

The following patterns are considered warnings:

```js
console.log('Ｙｏ');
```

The following patterns are not considered warnings:

```js
console.log('Yo');
```

## Rule Options

```js
...
"only-ascii": [<enabled>, {
  "allowedChars" : <string>,
  "excludePaths" : <string[]>,
}]
...
```

### `allowedChars`

Example of incorrect code for the default `{ "allowedChars": "" }` options:

```js
console.log("… and ✓ are non-ascii characters");
```

Example of correct code for `{ "allowedChars": "…✓" }` options:

```js
console.log("……now it's okay! ✓");
```

### `excludePaths`

When you set `{ "excludePaths": ['foo', 'bar'] }` , this rule ignores files whose fullpath matches `foo` or `bar`, e.g.) `foo.js`, `bar.js`, `foo/index.js`
