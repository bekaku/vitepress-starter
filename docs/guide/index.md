---
title: Guid index
---


## Routing!

[docs/index.md](/) -> /

[docs/guide/one.md](/guide/one) -> /one

[docs/api/index.md](/api/) -> /api/

[docs/guide/two.md](/guide/two) -> /guide/two

### All these options work!

[docs/guide/one.md](/guide/one) | 
[docs/api/index.md](/api/) |
[docs/guide/two.md](/guide/two)

'# Hello VitePress' 
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 

| Headings      | Are           | Centered    |
| ------------- |:-------------:| -----:      |
| left align    | centered      | right align |
| zebra striped | rows          | easy        |

### Blogging Like a Hacker
---

head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO

### Emoji
---
:tada: :100:


Table of Contents
---
[[toc]]


## Custom Containers

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

Syntax Highlighting in Code Blocks
---
```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```json{5}
{
    "role": {
        "name": "develop",
        "expiredAt": "2021-05-01",
        "description": "Highlighted!",
        "status": true
    }
}
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

- Line ranges: for example {5-8}, {3-10}, {10-17}
- Multiple single lines: for example {4,7,9}
- Line ranges and single lines: for example {4,7-13,16,23-27,40}

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

### Docs

::: v-pre
`{{ This will be displayed as-is }}`
:::

### text `<Tag/>`

---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---