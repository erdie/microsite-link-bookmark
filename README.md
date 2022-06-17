# Microsite Link Bookmarking

Simple microsite for bookmarking links. Using the Tailwind CSS framework and vanilla JavaScript. The data is sourced from the Google Sheets API

## How to use
Clone this repository and run npm install

```
git clone https://github.com/erdie/microsite-link-bookmark.git
cd microsite-link-bookmark
npm install
```

### Google Sheets API Docs
Get your API KEY and Speadsheet ID

Example ``https://sheets.googleapis.com/v4/spreadsheets/[GOOGLE-SPREADSHEET-API-HERE]/values/[SHEET_RANGE]?majorDimension=ROWS&key=[API-KEY-HERE]``

The docs https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get

## Compile Tailwind CSS

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```

watch command

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## UI Design
You can see the design in here

https://www.figma.com/community/file/1119513875404151182

## Video Tutorial
Soon
