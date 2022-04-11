/** @type {import('next').NextConfig} */

const mobileRegex = '/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/'; 

const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/mobile',
                permanent: false,
                has: [
                    {
                        type: 'header',
                        key: 'user-agent',
                        value: mobileRegex
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
