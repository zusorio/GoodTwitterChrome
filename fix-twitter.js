// simply tell the javascript of the page that we're on an up-to-date version
Object.defineProperty(navigator, 'userAgent', {
  get: ()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
})
