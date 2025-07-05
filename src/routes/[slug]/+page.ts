import { error } from '@sveltejs/kit';
import { stages } from '$lib/stages';

export const load = ({ params }) => {
    const config = stages[params.slug];
    if (!config) throw error(404, 'Stage not found');
    return { config };
};