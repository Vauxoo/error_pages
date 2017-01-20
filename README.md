Error Pages
===========

In this repo we intend to save our error pages

## Installing requirements

`npm install`

## Building error pages

`npm run build`

## Modifying the pages

### HTML

To change the html content for the pages you have to modify the
`data/vauxoo.json` file. That file contains a json object with a key
called `pages`, where every key inside that represents a directory,
which in turn is another object with every key representing an
html file.

So if you have:

```json
{
  "pages": {
    "dir1": {
      "page1": {

      },
      "page1": {

      }
    },
    "dir2": {
      "page3": {

      }
    }
  }
}
```

The script will generate 3 pages:

1. `dir1/page1.html`
2. `dir1/page2.html`
3. `dir2/page3.html`

Each page object must contain the following attributes:

- __code__ (string|int) The error code for the page
- __msg__ (string) The title message for the page
- __emoji__ (string) The emoji code (you can get them from http://emojisymbols.com/emojilist.php)
- __content__ (array) An array with the content blocks, that are objects with:
  - __type__ (string) "details" or "details small" or "links"
  - __text__ (string) (if type is "details" or "details small") The content for the block
  - __links__ (array) (if type is "links") An array with each key representing a link label and its value an url
  
Something like:

```json
{
  "code": 404,
  "msg": "Page not found",
  "emoji": "&#x1F635;",
  "content": [
    {
      "type": "details",
      "text": "Incorrect page"
    },
    {
      "type": "details small",
      "text": "The page you are looking for is not here. Try:"
    },
    {
      "type": "links",
      "links": {
        "Home": "http://somesite.domain/",
        "About us": "http://somesite.domain/about"
      }
    }
  ]
}
```

Will get you something like this:

![image](https://cloud.githubusercontent.com/assets/8657959/22163168/1abdeb88-df28-11e6-8cbb-a9a98b4265cc.png)

### CSS

To modify the style of the pages go to the `src/less/style.less` and modify the values
for the colors in the section titled `/* Variables */`.

Those variables are:

- __bgcolor__: background color.
- __fontcolor__: the general font color.
- __fontcolor-light__: the color for the text in the footer section.
- __hlcolor__: highlight color for the links and emoji.
- __separator__: the color for the separator after the title msg.

So, setting them like:

```less
@bgcolor: #333333;
@fontcolor: #F9F9F9;
@fontcolor-light: #DDDDDD;
@hlcolor: #3AFF7A;
@separator: #DDDDDD;
```

Will get you:

![image](https://cloud.githubusercontent.com/assets/8657959/22163392/06acddce-df29-11e6-968b-409862d62a53.png)
