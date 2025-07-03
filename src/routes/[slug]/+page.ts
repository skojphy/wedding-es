import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { StageConfig } from '$lib/stages';
import { stages } from '$lib/stages';

export const load: PageLoad = ({ params }) => {
    const config = stages[params.slug];
    if (!config) throw error(404, 'Stage not found');
    return { config };
};