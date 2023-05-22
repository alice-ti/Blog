const head = [
	['link', { rel: 'icon', href: '/favicon.ico' }],
	[
		'link',
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
		// would render:
		//
		// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	],
	[
		'script',
		{ id: 'register-sw' },
		`;(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
      }
    })()`
		// would render:
		//
		// <script id="register-sw">
		// ;(() => {
		//   if ('serviceWorker' in navigator) {
		//     navigator.serviceWorker.register('/sw.js')
		//   }
		// })()
		// </script>
	]
]

export default head
