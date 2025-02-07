export default {
    theme: {
        extend: {
            animation: {
                slideIn: 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fadeInUp: 'fadeInUp 0.8s ease-out forwards',
                scaleX: 'scaleX 0.8s ease-out forwards',
                fadeIn: 'fadeIn 0.8s ease-out',
                fadeInLeft: 'fadeInLeft 0.8s ease-out',
                fadeInRight: 'fadeInRight 0.8s ease-out',
                underline: 'underline 0.8s ease-out'
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                fadeInUp: {
                    'from': { opacity: 0, transform: 'translateY(20px)' },
                    'to': { opacity: 1, transform: 'translateY(0)' }
                },
                scaleX: {
                    'from': { transform: 'scaleX(0)' },
                    'to': { transform: 'scaleX(1)' }
                },
                fadeIn: {
                    'from': { opacity: 0 },
                    'to': { opacity: 1 }
                },
                fadeInLeft: {
                    'from': { opacity: 0, transform: 'translateX(-20px)' },
                    'to': { opacity: 1, transform: 'translateX(0)' }
                },
                fadeInRight: {
                    'from': { opacity: 0, transform: 'translateX(20px)' },
                    'to': { opacity: 1, transform: 'translateX(0)' }
                },
                underline: {
                    'from': { width: '0' },
                    'to': { width: '8rem' }
                }
            }
        }
    }
};
