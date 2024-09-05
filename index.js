import { applyGradient } from 'gradient-badge';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const isFlat = url.searchParams.get('style') === 'flat';
    const gradient = url.searchParams.get('gradient')?.split(',') || [];

    // Fetch original badge
    const response = await fetch(`https://${isFlat ? 'flat.' : ''}badgen.net${url.pathname}${url.search}`);

    // Apply gradient
    const svgBadge = await response.text();
    const gradientBadge = applyGradient(svgBadge, gradient);

    // Return the new badge
    return new Response(gradientBadge, response);
  },
};
