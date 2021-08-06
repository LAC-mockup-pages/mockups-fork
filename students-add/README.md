# students-add

Adding students page update

ASISTS file:

ASISTS 2020 file:

## File structure

### Training notes

### Dev notes

Other Students_PKID: 413429 - 752243 - 450028

### Attn. Gregory - 08/06/2021

All features are implemented, though some polish may be needed.
I had to recreate a few data objects that were missing from the different sets already created. Those are regrouped in the `/scripts/data-server.js` file.

The only process not implemented is related to the employment section. Not knowing where it should be sent to nor the field names, I'd rather we go through it together after my return. I separated the save functions from the main source in the `/scripts/components/data-save.js` file. Please look at it as it will need some work to make it happen.

There is no data check for the moment but this code already exists in other page so it's going to be somewhat easier to adapt for this page. It's on my TODO list for my return (or I'll get to it in my time away).

See you when I'm back!
