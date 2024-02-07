/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**'
			}
		]
	}
}

module.exports = nextConfig
