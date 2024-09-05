import { applyGradient } from 'gradient-badge';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const isFlat = url.searchParams.get('style') === 'flat';
    const gradient = url.searchParams.get('gradient')?.split(',') || [];

    // Fetch original badge
    const response = await fetch(`https://${isFlat ? 'flat.' : ''}badgen.net${url.pathname}${url.search}`);
    const svgBadge = await response.text();

    if (svgBadge.startsWith('<svg')) {
      // Apply gradient
      const badgeWithGradient = applyGradient(svgBadge, gradient);
      // Return the new badge
      return new Response(badgeWithGradient, response);
    }

    // Redirect to GitHub if the response is not a badge
    return Response.redirect('https://github.com/bokub/gradgen?tab=readme-ov-file#-gradgen', 301);
  },
};
