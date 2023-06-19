import type { ExperienceEntry } from "$lib/utils/types";

const careerStart = new Date(2014, 8, 22);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		companySlug: 'usefulgroup',
		company: 'Rema 1000',
		jobTitle: 'Manual worker',
		timeframe: '2019 → Now',
		current: true,
		location: 'Horsens, Denmark',
		description:
			'Logistics, manual work, working in social environment, warehouse operations, inventory and cost management',
		tags: [
			{
				color: 'primary',
				label: 'Warehouse'
			},
			{
				color: 'primary',
				label: 'Logistics'
			}
		]
	},
	{
		companySlug: 'agora',
		company: 'Normal warehouse',
		jobTitle: 'Manual worker',
		timeframe: '2021 → 2022',
		location: 'Horsens, Denmark',
		description:
			'Logistics, manual work, working in social environment',
		tags: [
			{
				color: 'primary',
				label: 'tag1'
			},
			{
				color: 'primary',
				label: 'tag2'
			}
		]
	},
	{
		companySlug: 'agora',
		company: 'Autodoctor',
		jobTitle: 'supply-chain stuff member',
		timeframe: '2018 → 2019',
		location: 'Chisinau, Moldova',
		description:
			'Manual work and research',
		tags: [
			{
				color: 'primary',
				label: 'tag1'
			},
			{
				color: 'primary',
				label: 'tag2'
			}
		]
	},


] as ExperienceEntry[];
