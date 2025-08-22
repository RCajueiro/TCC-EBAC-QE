module.exports = {
reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: "./reports",
      filename: "index.html",
      expand: true,
      pageTitle: "Relatório de Testes API EBAC",
      hideIcon: false,
      openReport: true
    }]
  ]
};