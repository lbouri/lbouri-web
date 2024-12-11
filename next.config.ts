module.exports = {
  output: 'export',  // Export statique
  trailingSlash: true, // Ajoute une barre oblique à la fin des URLs
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lbouri-web/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/lbouri-web' : '',
};