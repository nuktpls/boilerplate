- **`[v.0.2.x:next]`**: Code instantly persistent dark mode, remove menus and styles fixes.
- **`[v.0.x.0:warning]`**: The first grand finale release will be publish at v1.0.0.
- **`[v.0.2.0:update]`**: Very first release atempt; package core system stable.

---

---

# Gatsby Layout Builder

#### LAYOUT BUILDER _by [Edu4Dev](https://edu4.dev)_

---

**Engine Agent:** Gatsby - Javascript Framework
**Engine SubAgent:** Gatsby Plugin
**Gatsby Plugin Name:** Gatsby Layout Builder

---

**Author:** Edu4Dev - Milton Bolonha
**Description:** Gatsby Layout Builder is the platform
web creators choose to build professional GatsbyJS HTML,
plus SCSS basic structure, such as rows, number of columns,
background color, header, responsive main menu,
modals and simple stuffs.

\*_Keep in mind these bundle aren't a block builder._

---

**Plugin URI:** https://www.npmjs.com/package/gatsby-layout-builder
**Plugin Install:** `npm i gatsby-layout-builder`
**Version:** 0.2.0
**Year:** 2021

---

Invoke:

```js
<Layout
	type="ROW"
	opt={{
		bgColor: '#fff',
		isBoxed: true,
		alignTo: 'center',
		numColumns: 3,
		// bgImg: {};
	}}
>
	// Your content goes here
</Layout>
```

## 🚀 Quick start

To get started to invoke rows, columns, modals, header and footer wrapper
standard structure on your theme, you can follow these steps:

1. Install Gatsby Layout Builder plugin with:

```shell
npm i gatsby-layout-builder
```

If you already have customize your gatsby-config.js, you can use it.
Otherwise, you should [create a new gatsby-config.js file](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) to setting your plugin.

2. Add the Gatsby Layout plugin to the build. In your gatsby-config.js insert the code:

```javascript
module.exports = {
	plugins: [`gatsby-layout-builder`],
	// if you just have the plugins array
	// you may need to place the plugin string name
	// between the right objects and arrays
	//
}
```

The Gatsby Layout Builder can you be used in your normal Gatsby ambient.
Something like this:

```
/in-your-gatsby-website
├── ./src/components
├──── ComponentX.js
├── ./src/pages
├──── index.js
└── Gatsby-config.js

/gatsby-business-in-build
├── index.js
├── package.json
└── README.md

```

3. Add the plugin correctly

The plugin will be added by the starter implements
of a <\Body \/> tag.React.Element.

You can verify Layout library to added to your site in next:

```javascript
<BodyContainer subAgent={subAgent} opt={opt} />
<FooterContainer subAgent={subAgent} opt={opt} />
<HeaderContainer opt={opt} />
<RowContainer opt={opt} subAgent={subAgent} />
```

4. Dependencies

xxx [xxx](https://www.x/).

## 🧐 What's inside?

This starter generates the [files Gatsby looks for in plugins](https://www.gatsbyjs.com/docs/files-gatsby-looks-for-in-a-plugin/).

```text
/nu-module
├── element_structure
├── element_logics
├── element_styles
├── configs
├── persistent_vars
├── tools
├── root_files
├── wrapper_gatsby
├── room.code-workspace
└── README.md
```

## 🎓 Learning Gatsby

If you're looking for more guidance on plugins, how they work, or what their role is in the Gatsby ecosystem, check out some of these resources:

- The [Creating Plugins](https://www.gatsbyjs.com/docs/creating-plugins/) section of the docs has information on authoring and maintaining plugins yourself.
- The conceptual guide on [Plugins, Themes, and Starters](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/) compares and contrasts plugins with other pieces of the Gatsby ecosystem. It can also help you [decide what to choose between a plugin, starter, or theme](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/#deciding-which-to-use).
- The [Gatsby plugin library](https://www.gatsbyjs.com/plugins/) has over 1750 official as well as community developed plugins that can get you up and running faster and borrow ideas from.
