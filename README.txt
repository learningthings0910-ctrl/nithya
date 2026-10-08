BIRTHDAY INTERACTIVE WEBSITE
============================

HOW TO USE
1. Open index.html in a browser.
2. The website flow is:
   Page 1  -> Happy Birthday + Click Me
   Page 2  -> Passcode (ONLY 1110 works)
   Page 3  -> "Do you wanna see it?" Yes / No
   Page 4  -> Funny "How dare you?!" page if No
   Page 5  -> "That's a good birthday..." page
   Page 6  -> Main birthday photo + message
   Page 7  -> Three memory sections
   Page 8-10 -> Individual memory pages
   Page 11 -> Final birthday wish + Back to Beginning

ASSET REPLACEMENT MAP
---------------------
Put your files in these folders using these exact names:

assets/images/page6-main.jpg
    Main birthday photo on Page 6

assets/images/page7-section1.jpg
    Photo for Memory Section 1 on Page 7
assets/images/page7-section2.jpg
    Photo for Memory Section 2 on Page 7
assets/images/page7-section3.jpg
    Photo for Memory Section 3 on Page 7

assets/images/page7-section1.jpg
    Main photo inside memory1.html
assets/images/page7-section2.jpg
    Main photo inside memory2.html
assets/images/page7-section3.jpg
    Main photo inside memory3.html

assets/videos/page7-section1.mp4
    Video on Memory 1 page
assets/videos/page7-section2.mp4
    Video on Memory 2 page
assets/videos/page7-section3.mp4
    Video on Memory 3 page

assets/music/birthday-song.mp3
    Background music

IMPORTANT:
- Keep the filenames above if you want the site to work without editing HTML.
- JPG/PNG images are fine; if you use PNG, change the .jpg name in the HTML.
- MP4 is recommended for browser video.
- MP3 is recommended for music.
- Browser autoplay rules mean music normally begins after the visitor's first tap/click.
- You can edit all text directly inside the HTML files.
- The CSS is in css/style.css.
- JavaScript is in js/app.js.

CUSTOMIZATION
-------------
Passcode: change "1110" inside js/app.js.
Page titles/messages: edit the corresponding .html file.
Colours/animations/backgrounds: edit css/style.css.

NO BUTTON:
The No button intentionally goes to the funny "How dare you?!" page.
If you want it to move away from the mouse instead, that can be added later.
