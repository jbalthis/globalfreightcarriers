import { authMiddleware } from '@clerk/nextjs';
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: [
    '/',
    '/about',
    '/carriers',
    '/contact',
    '/faq',
    '/partners',
    '/resources',
    '/technologies',
    '/testimonials',
    '/quote',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
