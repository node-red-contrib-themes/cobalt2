module.exports = function(RED) {
  RED.plugins.registerPlugin("cobalt2", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ],
    monacoOptions: {
      theme: "cobalt2"
    }
  })

  RED.plugins.registerPlugin("cobalt2-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ],
    monacoOptions: {
      theme: "cobalt2"
    }
  })
}