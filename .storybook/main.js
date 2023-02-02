module.exports = {
	stories: ["../src/components/**/*.stories.js"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-interactions"],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
}
