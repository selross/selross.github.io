# SELENE

This is how you update your website

### To edit the bio
  - go to `src/static/copy/about.json`
  - edit the `"bio_html"` field - it is actually html so most text will be fine but be careful with the links and if you need help google "a tag html"

### To add an item to the "work" list
  - upload the icon image file to  `src/static/icons/`
  - go to `src/static/copy/work.json`
  - add an item to the list in the spot where you want it; the format is:
```
{
  "title": "some dumb place you worked",
  "description": "some shit you did",
  "icon_file_name": "name_of_the_file_you_just_uploaded.png"
}
```

### To add an item to the "audio" list
  - there are three types of audio items and the formats are thus:

iframe
```
{
  "type": "iframe",
  "content": {
    "iframe": "the thing you get from soundcloud"
  }
}
```
link
```
{
  "type": "link",
  "content": {
    "icon_file_name": "corresponding_file_in_icons_folder.png",
    "title": "story title",
    "link": "http://www.duh.com"
  }
}
```

embedded file (upload the mp3 to `src/static/`)
```
{
  "type": "embedded_file",
  "content": {
    "icon_file_name": "same_as_above.jpg",
    "title": "ditto",
    "file_type": "audio/mp3",
    "file_name": "audio_file.mp3"
  }
}
```

### To edit contact details
  - Please ask me to do it

### To run 
- open terminal
- `z github`
- `npm run start`
- visit `localhost:3000`

### To deploy
- `ctrl+c` to stop the server
- `npm run build`
- push to github