const customViewports = {
  smallUgly: {
    name: 'smallUgly',
    styles: {
      width: '360px',
      height: '540px'
    }
  },
  mediumUgly: {
    name: 'mediumUgly',
    styles: {
      width: '1024px',
      height: '1200px'
    }
  }
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'someDefault'
  }
}