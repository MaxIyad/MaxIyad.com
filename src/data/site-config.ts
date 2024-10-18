export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
    image?: Image;
};

export type Terms = {
    title?: string;
    text?: string;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type ContactForm = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    terms?: Terms;
    subscribe?: Subscribe;
    contactForm?: ContactForm;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Max Iyad',
    subtitle: 'Restaurant Consultant',
    description: 'Max Iyad helping restaurant owners make more money and work less',

    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Templates',
            href: 'https://maxiyad.gumroad.com'
        },
        {
            text: 'All Posts',
            href: '/posts'
        },
        {
            text: 'Subscribe',
            href: '/'
        },

    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Templates',
            href: 'https://maxiyad.gumroad.com'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

    ],
    socialLinks: [
        {
            text: 'x.com',
            href: 'https://x.com/Max__Iyad'
        }
    ],
    hero: {
        title: 'Bring Back Your Dream Restaurant',
        text: "You've poured your heart and soul into your store. But hard work can only get you so far and a poor foundation will have you working overtime and not seeing results.\n\n" +
            "It's time to set yourself apart as the leading restaurant and become the kick-ass restaurant your customers cannot wait to come back to.",
        actions: [
            {
                text: 'Get Started',
                href: '/contact'
            }
        ]
    },
    about: {
        title: 'Meet your specialist',
        text: "I'm Max, a restaurant turn-around specialist. I've specialized in strategic systems that turn struggling restaurants in Ireland into thriving dream stores. My experience started with a <€150/day average restaurant in the heart of Waterford. It turned profitable within 3 months of implementing my systems and is now doing better than ever. Doing that, I discovered my passion for reviving dreams and encouraging restaurants to thrive.\n\n" +

            "It's my passion because I know how it feels to place all your effort into a dying business, only to get nothing back. As an extremely systematic and resourceful person, I've found my purpose in getting restaurant owners out of that slump. Because seeing their face shine once again when seeing their thriving store can keep me going forever.\n\n" +

            "My goal is to see your face shine once more when thinking about your restaurant. And revamp it to the thriving business we know it can be.",
        image: {
            src: '/medium.webp',
            alt: 'Alt Text'
        },
    },
    terms: {
        title: 'Terms of Service',
        text: 'These Terms of Service ("Terms") govern your access to and use of MaxIyad.com ("the Website") and any related services provided by [Max Iyad] ("we," "us," or "our"). Please read these Terms carefully before using the Website.\n\n' +
            '1. Acceptance of Terms\n\n' +
            'By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, please do not use the Website.\n\n' +
            '2. Changes to Terms\n\n' +
            'We reserve the right to modify, amend, or update these Terms at any time. Such changes will be effective upon posting on the Website. It is your responsibility to review these Terms regularly. Your continued use of the Website after any changes indicates your acceptance of the revised Terms.\n\n' +
            '3. Use of the Website\n\n' +
            'You agree to use the Website for lawful purposes and in a manner consistent with these Terms. You are responsible for any content you post or submit on the Website.\n\n' +
            '4. Registration and Account\n\n' +
            'Certain areas of the Website may require registration or the creation of an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.\n\n' +
            '5. Content and Intellectual Property\n\n' +
            'The content on the Website, including text, graphics, logos, images, audio, video, software, and other materials, is owned or licensed by us and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute the content without our prior written consent.\n\n' +
            '6. Third-Party Links\n\n' +
            'The Website may contain links to third-party websites or resources. We do not endorse and are not responsible for the content, products, or services provided by third parties. Your use of such websites is at your own risk.\n\n' +
            '7. Termination\n\n' +
            'We may, at our sole discretion, terminate or suspend your access to the Website at any time and for any reason, without notice.\n\n' +
            '8. Disclaimer\n\n' +
            'The Website and its content are provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content. We do not guarantee that the Website will be error-free or uninterrupted.\n\n' +
            '9. Limitation of Liability\n\n' +
            'To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or in connection with the use or inability to use the Website.\n\n' +
            '10. Governing Law\n\n' +
            'These Terms are governed by and construed in accordance with the laws of the Republic of Ireland, without regard to its conflict of laws principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the Republic of Ireland.\n\n' +
            'Thank you for reading our Terms of Service. By using the Website, you agree to be bound by these Terms\n\n',

    },
    subscribe: {
        title: 'Sell more, better.',
        text: 'Get the daily 5-min newsletter helping restaurant owners grow',
        formUrl: '#'
    },
    contactForm: {
        title: 'Get in Touch',
        text: 'Be it a question an invitation to help you in your journey, do not hesitate to get in touch.',
        formUrl: '/'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
