[![Build](https://github.com/mlocati/pixel2to9/actions/workflows/build.yml/badge.svg)](https://github.com/mlocati/pixel2to9/actions/workflows/build.yml)

# Convert Pixel2 to Pixel9 Concrete CMS CIF Files

Do you have a website with concrete5 v8 that uses the old Pixel 2 theme and you want to switch to Concrete CMS v9+ with a new [Pixel 9](https://market.concretecms.com/products/2140e37d-cf89-11ee-b9df-0a97d4ce16b9) theme?

You can do the following:

1. In your old concrete5 v8 website install the [Migration Tool package](https://github.com/concretecms/addon_migration_tool)
2. Export the website content to XML files (the so-called CIF Format)
3. Convert the XML files with [this tool](https://mlocati.github.io/pixel2to9/)
4. In your new ConcreteCMS v9+ website install the [Migration Tool package](https://github.com/concretecms/migration_tool)
5. Import the XML files


## Maintainer instructions

### Local test

In order to build and run this app locally:

1. Install NodeJS 22 LTS
2. Install the npm dependencies with `npm ci`
3. Run a local server with the app with `npm run dev`

### Data conversion

Data for the block types is converted by the converters in the `src/Conversion/Converter/Block directory`.

If you add a new block converter, please remember to add it to the `Converters` array defined in the `src/Conversion/Converter.ts` file.

