import type { Component } from 'svelte';
import Intro from '$lib/stages/Intro.svelte';
import Intro2 from '$lib/stages/Intro2.svelte';
import Stage1 from '$lib/stages/Stage1.svelte';
import Stage2 from '$lib/stages/Stage2.svelte';
import Stage3 from '$lib/stages/Stage3.svelte';
import Stage4 from '$lib/stages/Stage4.svelte';
import Stage5 from '$lib/stages/Stage5.svelte';
import Stage5_1 from '$lib/stages/Stage5_1.svelte';
import Stage5_2 from '$lib/stages/Stage5_2.svelte';
import Stage6 from '$lib/stages/Stage6.svelte';
export interface StageConfig {
    component: Component;
    title?: string;
}
export const stages: Record<string, StageConfig> = {
    'g4Pz8Kq2': { component: Intro, title: 'Intro' },
    'B7xL1sHz': { component: Intro2, title: 'Intro2' },
    'mz9Yv3Rt': { component: Stage1, title: 'Stage1' },
    'Qw4Dj2Zm': { component: Stage2, title: 'Stage2' },
    'Xn8Rf6Th': { component: Stage3, title: 'Stage3' },
    'Lp3Az7Uc': { component: Stage4, title: 'Stage4' },
    'Hj5Kq1Np': { component: Stage5, title: 'Stage5' },
    'Zy2Bo9Ld': { component: Stage5_1, title: 'Stage5-1' },
    'Rf6Kt4Gj': { component: Stage5_2, title: 'Stage5-2' },
    'Wk7Mn3Xp': { component: Stage6, title: 'Stage6' },
};
