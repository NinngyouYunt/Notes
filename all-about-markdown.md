---
title: All About Markdown
date: 2018-03-15 13:21:11
tags: 
  - Markdown
  - Notes
---

Github guide at [here](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
# h1
<h1>Html h1</h1>

alt-h1
======

## h2

Alt- h2 (doesn't matter how many lines under it)
---

### h3 You will come back

#### h4

##### h5

###### h6

Something is _Italic(Emphasis)_ and *single asterisk* works as well

Somthing is **Bold(Strong emphasis)** and __double underline__ also works

Something is ~~strikethrough~~

Something is 

Link to [Google](www.google.ca)

Example of [reference link][lol]

[lol]:www.google.ca

![This is the alt text for a picture](http://via.placeholder.com/100x100)

![refernce link image][image link]

[image link]:http://via.placeholder.com/50x50

[This is an in document link to a header](#h3-You-will-come-back) The link is #content-of-header (replace space with hyphen)

> "This is a block quote and it extends"
>
> there can be empy lines, and first space is ignored

* Unordered 1
* Unordered 2
  * sub 1
  * sub2 

1. Order 1
2. Order 2
   1. sub 1
   2. sub 2
      * sub 3
      * sub 4

this is how you should start a new line known as **Soft Break**  
add two spaces after a line and the next line will have no space between, and html _br_ also works<br/>
and this is **Hard Break**

there is space in between

Now coming to inline `code` ues `back tick`

For multi-line code, check [this](https://highlightjs.org/static/demo/) for what language is supported and how to use them

```python
print('This is in python')
```

```
no spesific language print() <br>
```

```html
<h1>This is html</h1>
```

This is supported by GFM (github flavored markdown)

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Line breaks

---
***
___

Video Image and link  
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/C0DPdy98e4c/0.jpg)](https://www.youtube.com/watch?v=C0DPdy98e4c)

Use [TeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) for math formulas

Task list
- [ ] Task 1
- [x] Task 2

You can use emoji in GFM as well
:+1: will give you thumb up if viewed on Github

